import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { deleteById, getAll, getById, getBySlug, insert, updateById } from "../services/category.service";
import { BAD_REQUEST, CREATED, OK } from "http-status";
import { getAllByCategoryId } from "../services/product.service";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await insert(req.body)
    return res.status(CREATED).json({
      status: CREATED,
      message: 'Create category success'
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}

export const getProductsByCategorySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1
    const sort = req.query.sortBy || 'asc'
    const category = await getBySlug(slug)
    const products = await getAllByCategoryId(category?._id, limit, page, sort as string)
    return res.status(OK).json({
      status: OK,
      data: products,
      paginate: {
        current_page: 1,
        total_page: Math.round(products.length / limit),
        total_items: products.length
      }
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      messag: error
    })
  }
}

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await getAll()
    return res.status(OK).json({
      status: OK,
      data: categories
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const category = await getById(id)
    return res.status(OK).json({
      status: OK,
      data: category
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    await updateById(id, req.body)
    return res.status(OK).json({
      status: OK,
      message: 'Update category success'
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    await deleteById(id)
    return res.status(OK).json({
      statuts: OK,
      message: 'Delete category success'
    })
  } catch (error) {
    return next(createHttpError[400](error as string))

  }
}