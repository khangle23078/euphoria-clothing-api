import { Schema, Types, model } from "mongoose";
import { IProduct } from "../interfaces/product";

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    require: true
  },
  slug: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  quantity: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  images: [
    {
      url: {
        type: String,
        required: true
      },
      public_id: {
        type: String,
        required: true
      }
    }
  ],
  is_host: {
    type: Boolean,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  specs: [
    {
      key: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  ],
  category_id: {
    type: Types.ObjectId,
    ref: 'categories'
  },
}, {
  collection: 'products',
  timestamps: true
})

export const Product = model('products', productSchema)