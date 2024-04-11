import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { getByEmail, insert } from "../services/user.service";
import { BAD_REQUEST, OK } from "http-status";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const isUserExits = await getByEmail(email)
    if (isUserExits) {
      return res.status(403).json({
        status: 403,
        message: 'Email đã tồn tại'
      })
    }
    await insert({ email, password })
    return res.status(OK).json({
      status: OK,
      message: 'Đăng ký thành công'
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}