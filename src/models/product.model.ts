import { Schema, Types, model } from "mongoose";

export const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true,
    default: 0
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
    required: true,
    default: false
  },
  description: {
    type: String,
    required: true
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
  category: {
    type: Types.ObjectId,
    ref: 'categories'
  },
}, {
  collection: 'products',
  timestamps: true
})

productSchema.index({ 'name': 'text' })

export const Product = model('products', productSchema)