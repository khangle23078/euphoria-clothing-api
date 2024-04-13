import { Router } from "express";
import { createOrder, getOrders, getOrdersByUserId, updateOrderStatus } from "../controllers/order.controller";

const route = Router()

route.get('/', getOrders)
route.post('/', createOrder)
route.get('/:userId', getOrdersByUserId)
route.put('/:id', updateOrderStatus)

export default route