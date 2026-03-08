export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  pricing?: string;
  tags?: string[];
}

export interface Stack {
  id: string;
  title: string;
  description: string;
  tools: string[]; // IDs or names of tools
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}
