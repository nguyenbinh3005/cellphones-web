import React from 'react';
import useStyles from './styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateToCart } from '../../redux/actions/cartActions';
import { removeFromCart } from '../../redux/actions/cartActions';

export default function CartScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const onIncreaseProduct = (title, quantity) => {
    dispatch(updateToCart(title, quantity + 1));
  };

  const onDecreaseProduct = (title, quantity) => {
    dispatch(updateToCart(title, quantity > 1 ? quantity - 1 : quantity));
  };

  const onRemoveFromCart = (title) => {
    dispatch(removeFromCart(title));
  };
  return (
    <div>
      {cartItems.length ? (
        cartItems.map((item) => (
          <div className={classes.cartItem} key={item._id}>
            <Link to={`/${item.title}`}>
              <img src={item.image} alt="" className={classes.left}></img>
            </Link>
            <div className={classes.right}>
              <span style={{ fontWeight: 'bold', fontFamily: 'arial' }}>
                {item.name}
              </span>
              <span style={{ color: '#e11b1e' }}>{item.price}</span>
              <div className={classes.actions}>
                <button
                  className={classes.count}
                  onClick={() => onDecreaseProduct(item.title, item.quantity)}
                >
                  -
                </button>
                <span className={classes.amount} style={{ fontWeight: 'bold' }}>
                  {item.quantity}
                </span>
                <button
                  className={classes.count}
                  onClick={() => onIncreaseProduct(item.title, item.quantity)}
                >
                  +
                </button>
                <DeleteForeverIcon
                  color="error"
                  style={{
                    fontSize: '30px',
                    marginLeft: '20px',
                    cursor: 'pointer',
                  }}
                  onClick={() => onRemoveFromCart(item.title)}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>Không có sản phẩm nào trong giỏ hàng, vui lòng tải lại trang</h2>
      )}
    </div>
  );
}
