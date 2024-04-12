import { Schema, Types, model } from "mongoose";
import { IOrder } from "../interfaces/order";
import { productSchema } from "./product.model";

const orderSchema = new Schema<IOrder>({
  user_id: {
    type: Types.ObjectId,
    ref: 'users'
  },
  full_name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  products: {
    type: [productSchema],
    default: []
  },
  total_quantity: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['processing', 'shipping', 'success', 'canceled'],
    default: 'processing'
  },
  total_price: {
    type: Number,
    required: true
  }
}, {
  collection: 'orders',
  timestamps: true
})

export const Order = model('orders', orderSchema)