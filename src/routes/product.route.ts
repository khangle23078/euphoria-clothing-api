import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProductBySlug, getProducts, getProductsByHot, updateProduct } from "../controllers/product.controller";

const route = Router()

route.get('/', getProducts)
route.get('/hot', getProductsByHot)
route.get('/:slug', getProductBySlug)
route.get('/id/:id', getProductById)
route.post('/', createProduct)
route.put('/:id', updateProduct)
route.delete('/:id', deleteProduct)

export default route