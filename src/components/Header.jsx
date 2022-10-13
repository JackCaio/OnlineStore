import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../imgs/Cart.svg';

export default class Header extends Component {
  render() {
    return (
      <header
        style={
          { display: 'grid',
            gridTemplateColumns: 'auto max-content',
            alignItems: 'center',
            padding: '0 20px' }
        }
      >
        Front End Store
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingCart"
        >
          <CartIcon />

        </Link>
      </header>
    );
  }
}
