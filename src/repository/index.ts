import { OllamaService } from "../ollama";
import { FourSquareService } from "../external";
import { RestaurantSearchParams } from "../type";

interface InstructionParams {
  action: string;
  parameters: RestaurantSearchParams;
}
export class RestoFinderRepository {
  static async findRestaurant({ message }: { message?: string }) {
    try {
      const instruction = (await OllamaService.convertToJSON(
        message || "",
      )) as {} as InstructionParams;

      const results = await FourSquareService.searchRestaurants(instruction.parameters);
      return results;
    } catch (error: any) {
      throw new Error(`Repository error: ${error.message}`);
    }
  }
}
