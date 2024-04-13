import { ObjectId } from "mongoose";
import { IProduct } from "./product";

export interface IOrder {
  user: ObjectId,
  status: string,
  full_name: string,
  products: IProduct[],
  total_price: number,
  address: string,
  phone_number: string,
  total_quantity: number,
}