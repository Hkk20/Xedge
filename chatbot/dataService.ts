import { Tool, Stack } from '../types';

const TOOLS_URL = 'https://script.google.com/macros/s/AKfycbwXUPBi4dVyG_Kv1muzOkssKKjaQzZuH_p0qc8gpjyyF5_pbTxiLv6DNnPFdUEdkds/exec';
const STACKS_URL = 'https://script.google.com/macros/s/AKfycbxakxwdLy0laxCskXtnhLqDK1WAqcaEPpZIfKexN5C8dFio3RXYabOwRtoW15qhBp24Bg/exec';

async function fetchWithTimeout(url: string, options = {}, timeout = 8000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

const MOCK_TOOLS: Tool[] = [
  { id: '1', name: 'Midjourney', description: 'Advanced AI image generation tool.', category: 'AI Image', url: 'https://midjourney.com' },
  { id: '2', name: 'ChatGPT', description: 'Powerful conversational AI by OpenAI.', category: 'Chatbot', url: 'https://chat.openai.com' },
  { id: '3', name: 'CapCut', description: 'Easy to use video editing tool with AI features.', category: 'Video', url: 'https://capcut.com' },
];

const MOCK_STACKS: Stack[] = [
  { id: 's1', title: 'YouTube Starter Stack', description: 'Everything you need to start a YouTube channel.', tools: ['CapCut', 'Midjourney'] },
  { id: 's2', title: 'Content Creator Stack', description: 'Tools for social media management and creation.', tools: ['ChatGPT', 'Midjourney'] },
];

export async function fetchTools(): Promise<Tool[]> {
  try {
    console.log('Fetching tools from:', TOOLS_URL);
    const response = await fetchWithTimeout(TOOLS_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    // Handle cases where data might be wrapped in an object
    const toolsArray = Array.isArray(data) ? data : (data.tools || data.data || []);
    console.log('Tools fetched successfully:', toolsArray.length);
    return toolsArray.length > 0 ? toolsArray : MOCK_TOOLS;
  } catch (error) {
    console.warn('Could not fetch tools, using mock data. Error:', error);
    return MOCK_TOOLS;
  }
}

export async function fetchStacks(): Promise<Stack[]> {
  try {
    console.log('Fetching stacks from:', STACKS_URL);
    const response = await fetchWithTimeout(STACKS_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    // Handle cases where data might be wrapped in an object
    const stacksArray = Array.isArray(data) ? data : (data.stacks || data.data || []);
    console.log('Stacks fetched successfully:', stacksArray.length);
    return stacksArray.length > 0 ? stacksArray : MOCK_STACKS;
  } catch (error) {
    console.warn('Could not fetch stacks, using mock data. Error:', error);
    return MOCK_STACKS;
  }
}
