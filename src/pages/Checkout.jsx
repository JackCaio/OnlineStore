import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CheckoutForm from '../components/CheckoutForm';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartList: (localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products')) : [],
    };
  }

  render() {
    const { history } = this.props;
    const { cartList } = this.state;
    const total = cartList
      .reduce((acc, cur) => acc + (cur.quantityPurchased * cur.price), 0);
    return (
      <div>
        <div>
          {cartList.map((prod) => (
            <p key={ prod.id }>
              <span>{prod.title}</span>
              <span>{` R$ ${prod.quantityPurchased * prod.price}`}</span>
            </p>
          ))}
          <p>{`Total: R$${total}`}</p>
        </div>
        <CheckoutForm push={ history.push } />
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
