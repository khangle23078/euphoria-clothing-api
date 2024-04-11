import { Router } from "express";
import { upload } from "../configs/cloudinary.config";
import { uploadSingleFile } from "../controllers/upload.controller";

const route = Router()

route.post('/upload/single', upload.single('image'), uploadSingleFile)

export default route