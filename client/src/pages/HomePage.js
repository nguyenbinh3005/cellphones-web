import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';

export default function HomePage() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/:title" component={ProductScreen} />
        <Route exact path="/checkout/cart" component={CartScreen} />
      </Switch>
    </BrowserRouter>
  );
}
