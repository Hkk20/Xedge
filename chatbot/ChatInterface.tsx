import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Loader2, Search, Layers, ExternalLink, X, MessageSquare, Zap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Message, Tool, Stack } from '../types';
import { fetchTools, fetchStacks } from '../services/dataService';
import { getChatResponse } from '../services/geminiService';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your **XEdge Assistant**. I can help you find the perfect AI tools or curated stacks for your projects. What are you looking to achieve today?",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tools, setTools] = useState<Tool[]>([]);
  const [stacks, setStacks] = useState<Stack[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadData = async () => {
      const [toolsData, stacksData] = await Promise.all([
        fetchTools(),
        fetchStacks(),
      ]);
      setTools(toolsData);
      setStacks(stacksData);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Gemini requires the conversation to start with a 'user' message.
      // We filter out the initial greeting if it's the first message.
      const historyForAI = [...messages, userMessage]
        .filter((msg, index) => !(index === 0 && msg.role === 'assistant'))
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }));

      const response = await getChatResponse(historyForAI, tools, stacks);
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again or visit xedge.tech directly.",
        timestamp: Date.now(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { icon: <Search size={14} />, label: "Find Image AI", query: "Suggest some AI tools for image generation." },
    { icon: <Layers size={14} />, label: "Show Stacks", query: "What are some popular stacks for content creators?" },
  ];

  return (
    <>
      {/* Floating Toggle Button - Premium Gradient */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center transition-all duration-500 z-[9999] group overflow-hidden",
          isOpen 
            ? "bg-white text-black rotate-90" 
            : "bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:scale-110 active:scale-95"
        )}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {isOpen ? <X size={28} /> : <Zap size={28} className="fill-current" />}
      </button>

      {/* Chat Window - Dark Luxury Theme */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[420px] h-[650px] max-h-[85vh] bg-[#0A0A0A] rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col overflow-hidden z-[9998]"
          >
            {/* Header - Minimalist & Premium */}
            <header className="px-8 py-6 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Zap size={22} className="text-white fill-current" />
                </div>
                <div>
                  <h1 className="font-bold text-base text-white tracking-tight">XEdge AI</h1>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    Assistant Active
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <X size={20} />
              </button>
            </header>

            {/* Chat Area - Refined Spacing & Typography */}
            <main className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div
                  key={msg.timestamp + idx}
                  className={cn(
                    "flex gap-4",
                    msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-sm",
                    msg.role === 'user' ? "bg-white/10" : "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                  )}>
                    {msg.role === 'user' ? <User size={16} className="text-gray-300" /> : <Zap size={16} className="fill-current" />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] rounded-[24px] px-5 py-3.5 text-[14px] leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-white text-black font-medium shadow-xl" 
                      : "bg-[#1E1E1E] border border-white/10 text-white shadow-sm"
                  )}>
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                  <div className="bg-[#1A1A1A] border border-white/5 rounded-[24px] px-5 py-3.5 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </main>

            {/* Input Area - Modern & Focused */}
            <footer className="p-6 bg-black/60 backdrop-blur-2xl border-t border-white/5 space-y-4">
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(action.query)}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[12px] text-gray-300 transition-all hover:scale-105 active:scale-95"
                    >
                      {action.icon}
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
              <div className="relative group">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask XEdge anything..."
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl px-5 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all resize-none text-sm text-white placeholder:text-gray-600"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    "absolute right-3 bottom-3 p-2.5 rounded-xl transition-all",
                    input.trim() && !isLoading 
                      ? "bg-white text-black shadow-lg hover:scale-110 active:scale-90" 
                      : "bg-white/5 text-gray-600"
                  )}
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex items-center justify-between px-2">
                <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
                  Premium AI Concierge
                </p>
                <a href="https://xedge.tech" target="_blank" rel="noreferrer" className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
                  xedge.tech <ExternalLink size={10} />
                </a>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
