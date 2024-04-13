import { Router } from "express";
import { updateUserProfile } from "../controllers/user.controller";

const route = Router()

route.put('/:id', updateUserProfile)

export default route