import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { CREATED } from "http-status";
import { insert } from "../services/product.service";

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