import { Router } from "express";
import {
  createCategory,
  deleteCategory, getCategories,
  getCategory, getProductsByCategorySlug,
  updateCategory
} from "../controllers/category.controller";

const route = Router()

route.get('/', getCategories)
route.get('/:id', getCategory)
route.get('/slug/:slug', getProductsByCategorySlug)
route.post('/', createCategory)
route.put('/:id', updateCategory)
route.delete('/:id', deleteCategory)

export default route;