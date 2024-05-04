import {Request, Response} from "express";
import {BAD_REQUEST, OK} from "http-status";
import {getByEmail, updateById} from "../services/user.service";

export const getUser = async (req: Request, res: Response) => {
  try {
    const {email} = req.params;
    const user = getByEmail(email);
    return res.status(OK).json({
      status: OK,
      data: user,
    });
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error,
    });
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    await updateById(id, req.body);
    return res.status(OK).json({
      status: OK,
      message: "Cập nhật profile thành công",
    });
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error,
    });
  }
};
