import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { insert } from "../services/category.service";
import { CREATED } from "http-status";

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