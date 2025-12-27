
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCreativeIdea(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are VRXX's digital twin, a premium, Gen-Z digital creator and strategist. 
      Your tone is confident, minimal, edgy, and highly creative.
      The user wants a creative idea for: ${prompt}.
      Give a short, punchy, high-impact suggestion that fits a dark, premium, street-aesthetic brand.
      Format: One bold headline and two bullet points.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. The vibes are off. Try again?";
  }
}
