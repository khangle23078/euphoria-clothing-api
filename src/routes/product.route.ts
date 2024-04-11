import { Router } from "express";
import { createProduct } from "../controllers/product.controller";

const route = Router()

route.post('/', createProduct)

export default route