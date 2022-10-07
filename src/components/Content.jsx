import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from './ShoppingCart';

class Content extends React.Component {
  state = { };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingCart" component={ ShoppingCart } />
      </Switch>

    );
  }
}

export default Content;
