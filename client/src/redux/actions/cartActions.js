import * as actionTypes from '../constants/cartConstants';
import * as api from '../../api/index';

export const addToCart = (title) => async (dispatch) => {
  const { data } = await api.getproductdetail(title);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      _id: data._id,
      name: data.name,
      title: data.title,
      price: data.price,
      image: data.image,
      quantity: 1,
    },
  });
};

export const updateToCart = (title, quantity) => async (dispatch) => {
  const { data } = await api.getproductdetail(title);

  dispatch({
    type: actionTypes.UPDATE_TO_CART,
    payload: {
      _id: data._id,
      name: data.name,
      title: data.title,
      price: data.price,
      image: data.image,
      quantity: quantity,
    },
  });
};

export const removeFromCart = (title) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: title,
  });
};
