import { Router } from "express";
import { createOrder, getOrdersByUserId, updateOrderStatus } from "../controllers/order.controller";

const route = Router()

route.post('/', createOrder)
route.get('/:userId', getOrdersByUserId)
route.put('/:id', updateOrderStatus)

export default route