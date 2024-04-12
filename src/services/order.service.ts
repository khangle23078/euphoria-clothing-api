import { IOrder } from "../interfaces/order";
import { Order } from "../models/order.model";

export const insert = (data: IOrder) => {
  return Order.create(data)
}

export const getByUserId = (userId: string) => {
  return Order.find({ user_id: userId })
}