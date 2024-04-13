import { ICategory } from "../interfaces/category";
import { Category } from "../models/category.model";

export const getAll = () => {
  return Category.find()
}

export const getById = (id: string) => {
  return Category.findById(id)
}

export const getBySlug = (slug: string) => {
  return Category.findOne({ slug: slug })
}

export const insert = (data: ICategory) => {
  return Category.create(data)
}

export const updateById = (id: string, data: ICategory) => {
  return Category.findByIdAndUpdate(id, data)
}

export const deleteById = (id: string) => {
  return Category.findByIdAndDelete(id)
}
