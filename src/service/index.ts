import { RestoFinderRepository } from "../repository";

export class RestoFinderService {
  static async findRestaurant({ message }: { message?: string }) {
    return RestoFinderRepository.findRestaurant({ message });
  }
}
