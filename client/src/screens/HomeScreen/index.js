import React from 'react';
import useStyles from './styles';

import BoxSliding from '../../components/BoxSliding';
import ListProduct from '../../components/ListProduct';

export default function HomeScreen() {
  const classes = useStyles();
  return (
    <div className={classes.homeScreen}>
      <div className={classes.body}>
        <BoxSliding />
      </div>
      <div className={classes.body}>
        <ListProduct />
      </div>
    </div>
  );
}
