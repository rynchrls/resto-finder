import ollama from "ollama";
import { LLM_MODEL } from "../config";

export class OllamaService {
  static async convertToJSON(userMessage: string): Promise<string> {
    try {
      const message = [
        {
          role: "user",
          content: `
          Convert the following user message into a JSON instruction with this structure:
          {
            "action": "restaurant_search",
            "parameters": {
              "query": string,
              "min_price": number | null,
              "open_now": boolean | null,
              "near": string | null
            }
          }

          Extract all relevant details from the message. 
          If a detail is not mentioned, set it to null.
          make sure min_price is a number between 1 and 4.

          User message: "${userMessage}"
        `,
        },
      ];
      const response = await ollama.chat({
        model: LLM_MODEL,
        messages: message,
      });
      return JSON.parse(response.message.content);
    } catch (error: any) {
      throw new Error(`Ollama API error: ${error}`);
    }
  }
}
