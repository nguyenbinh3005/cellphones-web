import React from 'react';
import useStyles from './styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import { addToCart } from '../../redux/actions/cartActions';
import { removeFromCart } from '../../redux/actions/cartActions';

export default function CartScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const onIncreaseProduct = () => {
    // dispatch(addToCart(product.title, 1));
  };

  const onRemoveFromCart = (title) => {
    dispatch(removeFromCart(title));
  };
  return (
    <div>
      {cartItems.map((item) => (
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
              <button className={classes.count} onClick={onIncreaseProduct}>
                -
              </button>
              <span className={classes.amount}>{item.quantity}</span>
              <button className={classes.count}>+</button>
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
      ))}
    </div>
  );
}
