import { IReview } from "../interfaces/review"
import { Review } from "../models/review.model"

export const insert = (data: IReview) => {
  return Review.create(data)
}