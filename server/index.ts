import express, { Application, Request, Response } from "express";
import productsRouter from "./router/productRouter";
import detailRouter from "./router/detailRouter";
require("./config/db");

const PORT: number = 3002;
const app: Application = express();

app.use(express.json());
app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json("message: Server Up 🚀🚀🚀");
});

app.use("/api/products", productsRouter);
app.use("/api/detail", detailRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT.: ${PORT}`);
});
