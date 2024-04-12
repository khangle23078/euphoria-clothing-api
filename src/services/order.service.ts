import { IOrder } from "../interfaces/order";
import { Order } from "../models/order.model";

export const insert = (data: IOrder) => {
  return Order.create(data)
}