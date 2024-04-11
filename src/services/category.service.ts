import { ICategory } from "../interfaces/category";
import { Category } from "../models/category.model";

export const insert = (data: ICategory) => {
  return Category.create(data)
}