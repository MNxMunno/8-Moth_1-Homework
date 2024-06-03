import { legacy_createStore, combineReducers } from "redux";
import { wishlist } from "./reducer/wishlist";
import { cartSlice } from "./reducer/productSlice";

const reducer = combineReducers({
  wishlist,
  cartSlice,
});

export const store = legacy_createStore(reducer);
