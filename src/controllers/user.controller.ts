import { Request, Response } from "express";
import { BAD_REQUEST, OK } from "http-status";
import { updateById } from "../services/user.service";

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await updateById(id, req.body)
    return res.status(OK).json({
      status: OK,
      message: 'Cập nhật profile thành công'
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}