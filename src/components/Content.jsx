import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
        </Switch>
      </>

    );
  }
}

export default Content;
