import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { BAD_REQUEST, CREATED, OK } from "http-status";
import { deleteById, getAll, getAllByProductHot, getById, getBySlug, insert, updateById } from "../services/product.service";

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const limit = Number(req.query.limit) || 10
    const page = Number(req.query.page) || 1
    const products = await getAll(limit)
    return res.status(OK).json({
      status: OK,
      data: products,
      paginate: {
        limit: limit,
        total_items: products.length,
        current_page: page,
      }
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}

export const getProductsByHot = async (req: Request, res: Response) => {
  try {
    const products = await getAllByProductHot()
    return res.status(OK).json({
      status: OK,
      data: products,
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}

export const getProductBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;
    const product = await getBySlug(slug)
    return res.status(OK).json({
      status: OK,
      data: product
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const product = await getById(id)
    return res.status(OK).json({
      status: OK,
      data: product
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await insert(req.body)
    return res.status(CREATED).json({
      status: CREATED,
      message: 'Create product success'
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await updateById(id, req.body)
    return res.status(OK).json({
      status: OK,
      message: 'Update product success!'
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    await deleteById(id)
    return res.status(OK).json({
      status: OK,
      message: 'Delete product success!'
    })
  } catch (error) {
    return next(createHttpError[400](error as string))
  }
}