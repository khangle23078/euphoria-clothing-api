import { Router } from "express";
import { createslide, getSlides } from "../controllers/slide.controller";

const route = Router()

route.get('/', getSlides)
route.post('/', createslide)

export default route