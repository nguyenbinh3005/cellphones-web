import * as actionTypes from '../constants/cartConstants';
import * as api from '../../api/index';

export const addToCart = (title, quantity) => async (dispatch) => {
  const { data } = await api.getproductdetail(title);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      _id: data._id,
      name: data.name,
      title: data.title,
      price: data.price,
      image: data.image,
      quantity,
    },
  });
};

export const removeFromCart = (title) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: title,
  });
};
