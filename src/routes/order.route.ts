import { Router } from "express";
import { createOrder } from "../controllers/order.controller";

const route = Router()

route.post('/', createOrder)

export default route