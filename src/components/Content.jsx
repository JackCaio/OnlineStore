import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from './ShoppingCart';
import ProductCard from './ProductCard';

class Content extends React.Component {
  state = { };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingCart" component={ ShoppingCart } />
        <Route path="/productCard" component={ ProductCard } />
      </Switch>

    );
  }
}

export default Content;
