// WISHLIST
export const WISHLIST = "WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const INC_CART_QUANT = "INC_CART_QUANT";
export const DEC_CART_QUANT = "DEC_CART_QUANT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_CART = "REMOVE_CART";

export const toggleWishlist = (payload) => {
  return {
    type: WISHLIST,
    payload,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const incCartQuant = (payload) => {
  return {
    type: INC_CART_QUANT,
    payload,
  };
};

export const decCartQunat = (payload) => {
  return {
    type: DEC_CART_QUANT,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const removeCart = (payload) => {
  return {
    type: REMOVE_CART,
    payload,
  };
};
