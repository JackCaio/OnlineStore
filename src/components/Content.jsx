import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import ProductCard from '../pages/ProductCard';
import ShoppingCart from '../pages/ShoppingCart';
import Header from './Header';

class Content extends React.Component {
  state = { };

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shoppingCart" component={ ShoppingCart } />
          <Route path="/productCard/:id" component={ ProductCard } />
          <Route path="/finaliza" component={ Checkout } />
        </Switch>
      </>

    );
  }
}

export default Content;
