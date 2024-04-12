import { Router } from "express";
import { createOrder, getOrdersByUserId } from "../controllers/order.controller";

const route = Router()

route.post('/', createOrder)
route.get('/:userId', getOrdersByUserId)

export default route