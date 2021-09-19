import React from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { getProducts as listProducts } from '../../redux/actions/productActions';

export default function ListProduct() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={classes.listProduct}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        products.map((product) => (
          <Link
            key={product._id}
            to={`/${product.title}`}
            className={classes.productBox}
          >
            <img
              src={product.image}
              alt=""
              style={{ height: '160px', width: '160px' }}
            />
            <span style={{ fontWeight: 'bold', color: 'black' }}>
              {product.name}
            </span>
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {product.price}
            </span>
          </Link>
        ))
      )}
    </div>
  );
}
