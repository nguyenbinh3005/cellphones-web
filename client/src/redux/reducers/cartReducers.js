import * as actionTypes from '../constants/cartConstants';

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.title === item.title);
      if (existItem) {
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.UPDATE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.title === action.payload.title ? action.payload : x
        ),
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
