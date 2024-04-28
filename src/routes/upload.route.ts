import {Router} from "express";
import {upload} from "../configs/cloudinary.config";
import {deleteFile, uploadSingleFile} from "../controllers/upload.controller";

const route = Router();

route.post("/upload/single", upload.single("file"), uploadSingleFile);
route.post("/delete", deleteFile);

export default route;
