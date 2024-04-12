import { Request, Response } from "express"
import { BAD_REQUEST, OK } from "http-status"
import { v2 as cloudinary } from 'cloudinary'

export const uploadSingleFile = (req: Request, res: Response) => {
  try {
    const image = req.file
    return res.status(OK).json({
      status: OK,
      message: 'Upload file success',
      data: {
        url: image?.path,
        public_id: image?.filename
      }
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const { public_id } = req.body
    await cloudinary.uploader.destroy(public_id)
    return res.status(OK).json({
      status: OK,
      message: 'Delete file success'
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}