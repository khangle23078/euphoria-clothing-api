import { Request, Response } from "express";
import { getByUserId, insert } from "../services/order.service";
import { BAD_REQUEST, OK } from "http-status";
import { findById } from "../services/user.service";
import { ObjectId } from "mongoose";

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

export const getOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const oders = await getByUserId(userId)
    return res.status(OK).json({
      status: OK,
      data: oders
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}