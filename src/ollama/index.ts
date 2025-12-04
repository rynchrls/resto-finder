import { LLM_MODEL, OLLAMA_API_KEY, OLLAMA_BASE_URL } from "../config";
import { Ollama } from "ollama";
const LLM = new Ollama({
  host: OLLAMA_BASE_URL,
  headers: { Authorization: "Bearer " + OLLAMA_API_KEY },
});
export class OllamaService {
  static async convertToJSON(userMessage: string): Promise<string> {
    try {
      const messages = [
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
      const response = await LLM.chat({
        model: LLM_MODEL,
        messages,
      });
      return JSON.parse(response.message.content);
    } catch (error: any) {
      throw new Error(`Ollama API error: ${error}`);
    }
  }
}
