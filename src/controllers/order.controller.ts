import { Request, Response } from "express";
import { insert } from "../services/order.service";
import { BAD_REQUEST, OK } from "http-status";

export const createOrder = async (req: Request, res: Response) => {
  try {
    await insert(req.body)
    return res.status(OK).json({
      status: OK,
      message: 'Create order success'
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}