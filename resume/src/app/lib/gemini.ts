import * as generative from "@google/generative-ai";

// Handle different possible export shapes from the package to avoid TS errors
const GoogleGenAI: any = (generative as any).GoogleGenAI ?? (generative as any).default ?? generative;

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});