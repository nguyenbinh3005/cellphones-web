import * as actionTypes from '../constants/cartConstants';

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.title !== action.payload),
      };
    default:
      return state;
  }
};
