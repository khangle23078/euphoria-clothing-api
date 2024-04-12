import { Router } from "express";
import { createReview, getReviews } from "../controllers/review.controller";

const route = Router()

route.post('/', createReview)
route.get('/:productId', getReviews)

export default route