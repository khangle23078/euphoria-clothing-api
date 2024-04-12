import { ObjectId } from "mongoose";

export interface IReview {
  rating: number,
  comment: string,
  product: ObjectId,
  user: ObjectId
}