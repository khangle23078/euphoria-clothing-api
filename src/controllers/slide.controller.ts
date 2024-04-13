import { Request, Response } from "express";
import { BAD_REQUEST, OK } from "http-status";
import { getAll, insert, updateById } from "../services/slide.service";

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

export const createslide = async (req: Request, res: Response) => {
  try {
    await insert(req.body)
    return res.status(OK).json({
      status: OK,
      messsage: 'Create slide success'
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}

export const updateSlide = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await updateById(id, req.body)
    return res.status(OK).json({
      status: OK,
      message: 'Update slide success'
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}