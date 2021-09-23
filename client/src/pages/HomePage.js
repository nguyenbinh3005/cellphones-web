import React from 'react';
import useStyles from './styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';

export default function HomePage() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.homePage}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/:title" component={ProductScreen} />
          <Route exact path="/checkout/cart" component={CartScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
