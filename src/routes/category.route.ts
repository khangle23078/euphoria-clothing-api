import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/category.controller";

const route = Router()

route.get('/', getCategories)
route.get('/:id', getCategory)
route.post('/', createCategory)
route.put('/:id', updateCategory)
route.delete('/:id', deleteCategory)

export default route;