/* Defines the Review entity */
export interface Review {
  id: number | null;
  productId: number;
  comment: string;
  rating: number;
}
