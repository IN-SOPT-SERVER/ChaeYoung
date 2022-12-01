import { upload } from "../middlewares";
import { Router } from "express";
import imageController from "../controller/imageController";

const router: Router = Router();

router.post("/", upload.single("file"), imageController.uploadImage);

export default router;
