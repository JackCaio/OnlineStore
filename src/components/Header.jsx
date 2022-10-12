import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../imgs/Cart.svg';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      cartQuant: 0,
    };
  }

  render() {
    const { cartQuant } = this.state;
    return (
      <header
        style={
          { display: 'grid',
            gridTemplateColumns: 'auto max-content',
            alignItems: 'center',
            padding: '0 20px' }
        }
      >
        <h1 style={ { margin: '0' } }>Front End Store</h1>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingCart"
        >
          <div style={ { position: 'relative' } }>
            <CartIcon />
            <p className="cartQuant">{cartQuant}</p>
          </div>

        </Link>
      </header>
    );
  }
}
