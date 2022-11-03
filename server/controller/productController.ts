import { Request, Response } from "express";
import productModel from "../model/productModel";
import cloudinary from "../config/cloudinary";

const getProducts = async (req: Request, res: Response): Promise<Response> => {
  try {
    const product = await productModel.find();
    return res.status(200).json({
      message: "Products Gotten",
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An Error Occoured ❌❌❌",
      data: error,
    });
  }
};

const createProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productName, price, brandName, bagType, bagColor } = req.body;
    const cloudImage = await cloudinary.uploader.upload(req.file?.path);
    const uploadProduct = await productModel.create({
      productName,
      price,
      brandName,
      bagType,
      bagColor,
      avatar: cloudImage.secure_url,
      avatarID: cloudImage.public_id,
    });

    return res.status(201).json({
      message: "Product Created Sucessfully",
      data: uploadProduct,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

export { getProducts, createProducts };
