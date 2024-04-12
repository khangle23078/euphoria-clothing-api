import { ObjectId } from "mongoose";
import { IProduct } from "./product";

export interface IOrder {
  user_id: ObjectId,
  full_name: string,
  products: IProduct[],
  total_price: number,
  address: string,
  phone_number: string,
  total_quantity: number,
  status: string
}