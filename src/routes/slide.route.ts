import { Router } from "express";
import { getSlides } from "../controllers/slide.controller";

const route = Router()

route.get('/', getSlides)

export default route