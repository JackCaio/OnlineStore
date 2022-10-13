import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../imgs/Cart.svg';

export default class Header extends Component {
  render() {
    const { qtdCart } = this.props;
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
            <p className="cartQuant" data-testid="shopping-cart-size">{qtdCart}</p>
          </div>

        </Link>
      </header>
    );
  }
}

Header.defaultProps = {
  qtdCart: 0,
};

Header.propTypes = {
  qtdCart: PropTypes.number,
};
