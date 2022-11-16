import axios from "axios";
import { atom, selector } from "recoil";
import { iData } from "./Interface";

const URL: string = "https://bag-server.vercel.app/api/products";

export const products = selector({
  key: "products",
  get: async () => {
    const data = await axios.get(URL);
    const newData = data.data.data as Array<iData>;
    return newData || [];
  },
});

export const cartState = atom({
  key: "cart",
  default: [] as Array<iData>,
});

export const detail = atom({
  key: "detail",
  default: {} as iData,
});

export const cartTotalState = selector({
  key: "cartTotalState",
  get: ({ get }) => {
    const cart = get(cartState);
    const total = cart.reduce((a: number, b) => b.QTY * b.price, 0);
    return {
      total,
    };
  },
});
