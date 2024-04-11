import { Router } from "express";
import { createCategory, getCategories, getCategory, updateCategory } from "../controllers/category.controller";

const route = Router()

route.get('/', getCategories)
route.get('/:id', getCategory)
route.post('/', createCategory)
route.put('/:id', updateCategory)

export default route;