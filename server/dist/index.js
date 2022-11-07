"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter_1 = __importDefault(require("./router/productRouter"));
const detailRouter_1 = __importDefault(require("./router/detailRouter"));
require("./config/db");
const PORT = 3002;
const app = express_1.default();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.status(200).json("message: Server Up 🚀🚀🚀");
});
app.use("/api/products", productRouter_1.default);
app.use("/api/detail", detailRouter_1.default);
app.listen(PORT, () => {
    console.log(`Listening on PORT.: ${PORT}`);
});
