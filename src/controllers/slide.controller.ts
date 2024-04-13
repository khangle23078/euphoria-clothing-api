import { Request, Response } from "express";
import { BAD_REQUEST, OK } from "http-status";
import { getAll } from "../services/slide.service";

export const getSlides = async (req: Request, res: Response) => {
  try {
    const slides = await getAll()
    return res.status(OK).json({
      status: OK,
      message: slides
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}