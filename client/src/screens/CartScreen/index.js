import React from 'react';
import useStyles from './styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function CartScreen() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.cartItem}>
        <img
          src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1.jpg"
          alt=""
          className={classes.left}
        ></img>
        <div className={classes.right}>
          <span style={{ fontWeight: 'bold', fontFamily: 'arial' }}>
            Samsung Galaxy S21 Ultra
          </span>
          <span style={{ color: '#e11b1e' }}>24.900.000 VND</span>
          <div className={classes.actions}>
            <button className={classes.count}>-</button>
            <span className={classes.amount}>1</span>
            <button className={classes.count}>+</button>
            <DeleteForeverIcon
              color="error"
              style={{
                fontSize: '30px',
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
