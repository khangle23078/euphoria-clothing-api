import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { getAll, insert } from "../services/category.service";
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