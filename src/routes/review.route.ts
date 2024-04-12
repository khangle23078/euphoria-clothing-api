import { Router } from "express";
import { createReview } from "../controllers/review.controller";

const route = Router()

route.post('/', createReview)

export default route