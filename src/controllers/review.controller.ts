import { Request, Response } from "express";
import { BAD_REQUEST, OK } from "http-status";
import { insert } from "../services/review.service";

export const createReview = async (req: Request, res: Response) => {
  try {
    await insert(req.body)
    return res.status(OK).json({
      status: OK,
      message: 'Comment success'
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}