import { GoogleGenerativeAI } from '@google/generative-ai';
import { APP_CONFIG } from '../config/constants';
import { mockProducts } from '../data/mockProducts';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are an AI shopping assistant for an electronics store. 
You have access to the following product categories: Electronics.
Respond naturally and help users find products, answer questions about specifications, 
and provide recommendations based on their needs.

Available products:
${mockProducts.map(p => `- ${p.name}: ${p.description} ($${p.price})`).join('\n')}

Keep responses concise and focused on helping the user with their shopping needs.`;

export async function chat(message: string) {
  try {
    const model = genAI.getGenerativeModel({ model: APP_CONFIG.API_ENDPOINTS.GEMINI });
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: SYSTEM_PROMPT,
        },
        {
          role: 'model',
          parts: 'I understand. I will help users with their electronics shopping needs based on the available products.',
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error chatting with Gemini:', error);
    throw error;
  }
}