import { IReview } from "../interfaces/review"
import { Review } from "../models/review.model"

export const insert = (data: IReview) => {
  return Review.create(data)
}

export const getAll = (productId: string, rating: number, limit: number, page: number) => {
  return Review.find({ product: productId })
    .populate('user', ['email', 'full_name'])
    .skip((page - 1) * limit).limit(limit)
    .where({ rating: rating })
}