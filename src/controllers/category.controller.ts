import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { deleteById, getAll, getById, insert, updateById } from "../services/category.service";
import { CREATED, OK } from "http-status";

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