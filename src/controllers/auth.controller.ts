import { Request, Response } from "express";
import { BAD_REQUEST, OK } from "http-status";
import { getByEmail, insert } from "../services/user.service";
import bcrypt from 'bcrypt'
import { sign } from "jsonwebtoken";
import 'dotenv/config'

export const register = async (req: Request, res: Response) => {
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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const isUserExits = await getByEmail(email)
    if (!isUserExits) {
      return res.status(OK).json({
        status: OK,
        message: 'Email không tồn tại'
      })
    }
    const isMatchingPassword = await bcrypt.compare(password, isUserExits.password as string)
    if (!isMatchingPassword) {
      return res.status(OK).json({
        status: OK,
        message: 'Mật khẩu không trùng khớp'
      })
    }
    const accessToken = sign({ id: isUserExits.id as string },
      process.env.ACCESS_TOKEN_SECRET as string
      , {
        expiresIn: '1d'
      })
    return res.status(OK).json({
      status: OK,
      message: 'Đăng nhập thành công',
      access_token: accessToken
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}