export interface RestaurantSearchParams {
  query: string | null;
  min_price: number | null;
  open_now: boolean | null;
  near: string | null;
}
