import { Types } from "mongoose"
import { IProduct } from "../interfaces/product"
import { Product } from "../models/product.model"

export const getAll = (limit: number) => {
  return Product.find()
    .select(['name', 'slug', 'price', 'images', 'is_host', 'discount'])
    .limit(limit)
}

export const getAllByProductHot = () => {
  return Product.find({ is_host: true })
    .select(['name', 'slug', 'price', 'images', 'is_host', 'discount'])
    .limit(10)
}

export const getAllByCategoryId = (categoryId: Types.ObjectId | undefined, limit: number, page: number, orderBy: string) => {
  return Product.find({ category: categoryId })
    .select(['name', 'price', 'images', 'slug'])
    .skip((page - 1) * limit).limit(limit)
    .sort({
      orderBy: orderBy === 'desc' ? 'desc' : 'asc'
    })
}

export const getBySlug = (slug: string) => {
  return Product.findOne({ slug: slug })
}

export const getById = (id: string) => {
  return Product.findById(id)
}

export const insert = (data: IProduct) => {
  return Product.create(data)
}

export const updateById = (id: string, data: IProduct) => {
  return Product.findByIdAndUpdate(id, data, { new: true })
}

export const deleteById = (id: string) => {
  return Product.findByIdAndDelete(id)
}