import { ObjectId } from "mongoose";

export interface IReview {
  rating: number,
  comment: string,
  product_id: ObjectId,
  user_id: ObjectId
}