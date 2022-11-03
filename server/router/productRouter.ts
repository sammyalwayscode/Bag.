import { Router } from "express";
import { createProducts, getProducts } from "../controller/productController";
import cpUpload from "../config/multer";
const router = Router();

router.route("/").get(getProducts);
router.route("/newProduct").post(cpUpload, createProducts);

export default router;
