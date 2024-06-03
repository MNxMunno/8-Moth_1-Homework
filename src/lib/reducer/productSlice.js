import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  REMOVE_CART,
  DEC_CART_QUANT,
  INC_CART_QUANT,
} from "../action/action";

const initialState = JSON.parse(localStorage.getItem("carts")) || [];

export const cartSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let index = state.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state = [...state, { ...action.payload, quantity: 1 }];
      } else {
        state = state.map((el, inx) =>
          inx === index ? { ...el, quantity: el.quantity + 1 } : item
        );
      }
      localStorage.setItem("carts", JSON.stringify(state));
      return state;
    }
    case INC_CART_QUANT: {
      let index = state.findIndex((el) => el.id === action.payload.id);
      state = state.map((el, inx) =>
        inx === index ? { ...el, quantity: el.quantity + 1 } : item
      );
      localStorage.setItem("carts", JSON.stringify(state));
      return state;
    }
    case DEC_CART_QUANT: {
      let index = state.findIndex((el) => el.id === action.payload.id);
      state = state.map((el, inx) =>
        inx === index ? { ...el, quantity: el.quantity - 1 } : item
      );
      localStorage.setItem("carts", JSON.stringify(state));
      return state;
    }
    case REMOVE_FROM_CART: {
      state = state.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("carts", JSON.stringify(state));
      return state;
    }
    case REMOVE_CART: {
      state = [];
      localStorage.setItem("carts", JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
};
