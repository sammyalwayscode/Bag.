import { createSlice } from "@reduxjs/toolkit";
import { iData } from "./Interface";

type test = {
  cart: iData[];
  QTY: number;
  TOTALPRICE: number;
  PREORDER: {}[] | null;
  FILTERCATEGORY: {}[] | null;
};

const initialState: test = {
  cart: [],
  QTY: 0,
  TOTALPRICE: 0,
  PREORDER: null,
  FILTERCATEGORY: null,
};

const ReduxState: any = createSlice({
  name: "second",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);
      if (check >= 0) {
        state.cart[check].QTY += 1;
      } else {
        state.cart.push({ ...payload, QTY: 1 });
      }
      state.QTY += 1;
      state.TOTALPRICE += payload.price;
    },

    removeFromCart: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);
      if (state.cart[check].QTY > 1) {
        state.cart[check].QTY -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== payload._id);
      }

      state.QTY -= 1;
      state.TOTALPRICE -= payload.price;
    },
    preOrderDetails: (state, { payload }) => {
      state.PREORDER = payload;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    resetPrice: (state) => {
      state.TOTALPRICE = 0;
    },
    resetQty: (state) => {
      state.QTY = 0;
    },
    filterCategory: (state, { payload }) => {
      state.FILTERCATEGORY = payload;
    },
    resetFilter: (state) => {
      state.FILTERCATEGORY = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  preOrderDetails,
  clearCart,
  resetPrice,
  resetQty,
  filterCategory,
  resetFilter,
} = ReduxState.actions;

export default ReduxState.reducer;
