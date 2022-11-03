import express, { Application, Request, Response } from "express";
import productsRouter from "./router/productRouter";
require("./config/db");

const PORT: number = 3002;
const app: Application = express();

app.use(express.json());
app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json("message: Server Up 🚀🚀🚀");
});

app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Listening On PORT: ${PORT}`);
});
