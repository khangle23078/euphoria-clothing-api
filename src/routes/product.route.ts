import { Router } from "express";
import { createProduct, getProductById, getProductBySlug, getProducts } from "../controllers/product.controller";

const route = Router()

route.get('/', getProducts)
route.get('/:slug', getProductBySlug)
route.get('/id/:id', getProductById)
route.post('/', createProduct)

export default route