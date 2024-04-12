import { Schema, Types, model } from "mongoose";
import { IReview } from "../interfaces/review";

const reviewSchema = new Schema<IReview>({
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  product_id: {
    type: Types.ObjectId,
    ref: 'products',
    required: true
  },
  user_id: {
    type: Types.ObjectId,
    ref: 'users',
    required: true
  }
}, {
  collection: 'reviews',
  timestamps: true
})

export const Review = model('reviews', reviewSchema)