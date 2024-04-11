import { Router } from "express";
import { createCategory, getCategories } from "../controllers/category.controller";

const route = Router()

route.get('/', getCategories)
route.post('/', createCategory)

export default route;