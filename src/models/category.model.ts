import { Schema, model } from "mongoose";
import { ICategory } from "../interfaces/category";

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    require: true
  },
  image: {
    url: {
      type: String,
      require: true
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