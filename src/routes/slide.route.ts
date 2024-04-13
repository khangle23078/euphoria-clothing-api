import { Router } from "express";
import { createslide, deleteSlide, getSlides, updateSlide } from "../controllers/slide.controller";

const route = Router()

route.get('/', getSlides)
route.post('/', createslide)
route.put('/:id', updateSlide)
route.delete('/:id', deleteSlide)

export default route