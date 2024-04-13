import { Request, Response } from "express";
import { getByUserId, insert, updateById } from "../services/order.service";
import { BAD_REQUEST, OK } from "http-status";
import { IOrder } from "../interfaces/order";

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

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { status }: IOrder = req.body
    await updateById(id, status)
    return res.status(OK).json({
      status: OK,
      message: 'Cập nhật trạng thái đơn hàng thành công'
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}