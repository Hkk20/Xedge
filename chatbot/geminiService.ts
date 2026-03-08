import { GoogleGenAI, Type } from "@google/genai";
import { Tool, Stack } from "../types";

export const SYSTEM_INSTRUCTION = `You are the XEdge Assistant, a professional and helpful guide for xedge.tech. 
Your goal is to help users find the perfect AI tools and "stacks" (collections of tools for specific goals) from our directory.

Key Guidelines:
1. Be professional, clean, and extremely helpful.
2. The users are NOT tech-savvy; use simple, clear language.
3. When suggesting tools, provide their names, brief descriptions, and why they fit the user's need.
4. If a user asks for "stacks" or describes a goal (e.g., "I want to start a YouTube channel"), suggest relevant stacks or tools.
5. Use the provided tools to search the directory.
6. If you can't find a specific tool, suggest the closest alternative or ask for more details about their goal.
7. Always mention that they can find more at xedge.tech.
8. Format your responses using Markdown for better readability. Use bold for tool names.

You have access to functions to search tools and stacks. Use them whenever a user asks for recommendations or describes a task.`;

export async function getChatResponse(
  messages: { role: string; content: string }[],
  tools: Tool[],
  stacks: Stack[]
) {
  // Initialize AI inside the function to ensure fresh API key and handle missing key gracefully
  const apiKey = "AIzaSyDGvWJool3e_MmA9pSK_KRn0F6Syfumdb4";
 

  const ai = new GoogleGenAI({ apiKey });
  const model = "gemini-3-flash-preview";
  
  const searchTools = (query: string) => {
    if (!query) return [];
    const q = query.toLowerCase();
    return tools.filter(t => {
      if (!t) return false;
      const name = (t.name || '').toLowerCase();
      const desc = (t.description || '').toLowerCase();
      const cat = (t.category || '').toLowerCase();
      return name.includes(q) || desc.includes(q) || cat.includes(q);
    }).slice(0, 10);
  };

  const searchStacks = (query: string) => {
    if (!query) return [];
    const q = query.toLowerCase();
    return stacks.filter(s => {
      if (!s) return false;
      const title = (s.title || '').toLowerCase();
      const desc = (s.description || '').toLowerCase();
      return title.includes(q) || desc.includes(q);
    }).slice(0, 5);
  };

  const functionDeclarations = [
    {
      name: "search_directory",
      description: "Search for AI tools in the XEdge directory. Use this when the user asks for tool recommendations or describes a task.",
      parameters: {
        type: Type.OBJECT,
        properties: {
          query: {
            type: Type.STRING,
            description: "The search term or description of the tool/task.",
          },
        },
        required: ["query"],
      },
    },
    {
      name: "get_stacks",
      description: "Get curated 'stacks' (collections of tools) for specific goals. Use this when the user mentions 'stacks' or a broad project goal.",
      parameters: {
        type: Type.OBJECT,
        properties: {
          goal: {
            type: Type.STRING,
            description: "The goal or task the user wants to achieve.",
          },
        },
        required: ["goal"],
      },
    },
  ];

  const contents: any[] = messages.map(m => ({
    role: m.role === 'user' ? 'user' : 'model',
    parts: [{ text: m.content }]
  }));

  try {
    const config = {
      systemInstruction: SYSTEM_INSTRUCTION,
      tools: [{ functionDeclarations }],
    };

    let response = await ai.models.generateContent({
      model,
      contents,
      config,
    });

    let rounds = 0;
    // Handle up to 2 rounds of function calls
    while (response.functionCalls && response.functionCalls.length > 0 && rounds < 2) {
      rounds++;
      const functionCalls = response.functionCalls;
      
      // Add the model's function call to history
      contents.push(response.candidates[0].content);

      const functionResponseParts = [];
      for (const call of functionCalls) {
        let result = [];
        if (call.name === "search_directory") {
          result = searchTools(call.args.query as string);
        } else if (call.name === "get_stacks") {
          result = searchStacks(call.args.goal as string);
        }
        
        functionResponseParts.push({
          functionResponse: {
            name: call.name,
            response: { results: result },
            id: call.id
          }
        });
      }

      // Add the function response to history
      contents.push({
        role: 'user',
        parts: functionResponseParts
      });

      // Get next response from model
      response = await ai.models.generateContent({
        model,
        contents,
        config,
      });
    }

    const text = response.text;
    if (!text) {
      return "I found some interesting tools in our directory! You can explore them all at xedge.tech, or tell me more about what you're trying to build so I can give you a better recommendation.";
    }

    return text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error.message?.includes("403") || error.message?.includes("API_KEY_INVALID")) {
      return "I'm having trouble with my API key. Please check the configuration or try again later.";
    }
    
    if (error.message?.includes("500") || error.message?.includes("fetch failed")) {
      return "The AI service is currently unavailable. Please try again in a moment.";
    }

    return "I'm having a little trouble connecting to my brain right now. Please try again in a moment or visit xedge.tech directly!";
  }
}

