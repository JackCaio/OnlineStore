import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import ProductCard from '../pages/ProductCard';
import ShoppingCart from '../pages/ShoppingCart';
import Header from './Header';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      qtdCart: 0,
    };
  }

  componentDidMount() {
    this.attCart();
  }

  attCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('products'));
    if (!cartItems) {
      this.setState({
        qtdCart: 0,
      });
      return;
    }
    const qtdCart = cartItems.reduce((acc, cur) => acc + cur.quantityPurchased, 0);
    this.setState({
      qtdCart,
    });
  };

  render() {
    const { qtdCart } = this.state;
    return (
      <>
        <Header qtdCart={ qtdCart } />
        <Switch>
          <Route
            path="/"
            exact
            render={ (props) => <Home { ...props } attCart={ this.attCart } /> }
          />
          <Route
            path="/shoppingCart"
            render={ (props) => <ShoppingCart { ...props } attCart={ this.attCart } /> }
          />
          <Route
            path="/productCard/:id"
            render={ (props) => <ProductCard { ...props } attCart={ this.attCart } /> }
          />
          {/* <Route path="/checkout" component={ Checkout } /> */}
          <Route
            path="/checkout"
            render={ (props) => <Checkout { ...props } attCart={ this.attCart } /> }
          />
        </Switch>
      </>

    );
  }
}

export default Content;
