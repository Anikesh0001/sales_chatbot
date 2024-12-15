import { Message } from '../types';
import { chat as geminiChat } from './gemini';
import { useStore } from '../store/useStore';

export async function sendMessage(content: string): Promise<Message> {
  try {
    const response = await geminiChat(content);
    return {
      id: Math.random().toString(36).substring(7),
      content: response,
      timestamp: new Date(),
      sender: 'bot'
    };
  } catch (error) {
    console.error('Error in chat service:', error);
    throw error;
  }
}