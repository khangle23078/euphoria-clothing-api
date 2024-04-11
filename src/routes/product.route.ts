import { Router } from "express";
import { createProduct, getProductBySlug, getProducts } from "../controllers/product.controller";

const route = Router()

route.get('/', getProducts)
route.get('/:slug', getProductBySlug)
route.post('/', createProduct)

export default route