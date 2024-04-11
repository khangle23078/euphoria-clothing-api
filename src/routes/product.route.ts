import { Router } from "express";
import { createProduct, getProducts } from "../controllers/product.controller";

const route = Router()

route.get('/', getProducts)
route.post('/', createProduct)

export default route