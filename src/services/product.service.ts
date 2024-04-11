import { IProduct } from "../interfaces/product"
import { Product } from "../models/product.model"

export const getAll = (page: number, limit: number, orderBy: string) => {
  return Product.find()
    .select(['name', 'slug', 'price', 'images', 'is_host', 'discount'])
    .skip((page - 1) * limit).limit(limit)
    .sort({
      price: orderBy === 'desc' ? 'desc' : 'asc'
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