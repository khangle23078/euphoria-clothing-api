import { Schema, model } from "mongoose";
import { ICategory } from "../interfaces/category";

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  image: {
    url: {
      type: String,
      required: true
    },
    public_id: {
      type: String,
      required: true
    }
  }
}, {
  collection: 'categories',
  timestamps: true
})

export const Category = model('categories', categorySchema)