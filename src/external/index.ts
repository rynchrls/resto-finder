import axios from "axios";
import { FSQUARE_API_KEY, FSQUARE_URL } from "../config";
import { RestaurantSearchParams } from "../type/index.js";

export class FourSquareService {
  static buildParams = (paramsObj: RestaurantSearchParams) =>
    Object.fromEntries(
      Object.entries(paramsObj).filter(
        ([_, value]) => value !== null && value !== undefined && value !== "",
      ),
    );

  static async searchRestaurants({ query, min_price, open_now, near }: RestaurantSearchParams) {
    try {
      const params = this.buildParams({
        query,
        min_price,
        open_now,
        near,
      });

      const response = await axios.get(`${FSQUARE_URL}`, {
        params: {
          ...params,
          fields: "fsq_place_id,name,categories,location,distance,email",
        },
        headers: {
          "X-Places-Api-Version": "2025-06-17",
          Accept: "application/json",
          Authorization: `Bearer ${FSQUARE_API_KEY}`,
        },
      });
      
      return response.data;
    } catch (error: any) {
      throw new Error(`FourSquare API error: ${error.message}`);
    }
  }
}
