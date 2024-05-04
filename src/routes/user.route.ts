import {Router} from "express";
import {getUser, updateUserProfile} from "../controllers/user.controller";

const route = Router();

route.get("/:email", getUser);
route.put("/:id", updateUserProfile);

export default route;
