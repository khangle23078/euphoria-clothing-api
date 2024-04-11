import { Router } from "express";
import { createCategory } from "../controllers/category.controller";

const route = Router()

route.post('/', createCategory)

export default route;