import { IProduct } from "../interfaces/product"
import { Product } from "../models/product.model"

export const insert = (data: IProduct) => {
  return Product.create(data)
}