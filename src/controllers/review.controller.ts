import { Request, Response } from "express";
import { BAD_REQUEST, OK } from "http-status";
import { getAll, insert } from "../services/review.service";

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

export const getReviews = async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1
    const rating = Number(req.query.rating) || 5
    const { productId } = req.params
    const reviews = await getAll(productId, rating, limit, page)
    return res.status(OK).json({
      status: OK,
      data: reviews,
      paginate: {
        page: page,
        limit: 10,
        total_items: reviews.length,
        total_page: Math.round(reviews.length / limit)
      }
    })
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: error
    })
  }
}