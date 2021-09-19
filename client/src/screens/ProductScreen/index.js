import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { getProductDetails } from '../../redux/actions/productActions';

export default function ProductScreen({ match }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    if (product && match.params.title !== product.title) {
      dispatch(getProductDetails(match.params.title));
    }
  }, [dispatch, match, product]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className={classes.body}>
            <div className={classes.title}>{product.name}</div>
          </div>
          <div className={classes.body}>
            <div className={classes.left}>
              <img className={classes.imgProduct} src={product.image} alt="" />
              <div className={classes.inforProduct}>
                <span className={classes.priceProduct}>{product.price}</span>
                <Link to="/checkout/cart" className={classes.addCart}>
                  <span className={classes.titleAddCart1}>MUA NGAY</span>
                  <span className={classes.titleAddCart2}>
                    (Giao nhanh tận nhà)
                  </span>
                </Link>
              </div>
            </div>
            <div className={classes.right}>MORE INFORMATION</div>
          </div>
        </>
        // <div>product</div>
      )}
    </div>
  );
}
