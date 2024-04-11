import { Request, Response } from "express"
import { BAD_REQUEST, OK } from "http-status"

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