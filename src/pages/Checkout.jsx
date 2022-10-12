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
    const { cartList } = this.state;
    const total = cartList
      .reduce((acc, cur) => acc + (cur.quantityPurchased * cur.price), 0);
    return (
      <div>
        <div>
          {cartList.map((prod) => (
            <p key={ prod.id }>
              {`${prod.title} R$${prod.price * prod.quantityPurchased}`}
            </p>
          ))}
          <p>{`Total: R$${total}`}</p>
        </div>
        <CheckoutForm />
      </div>
    );
  }
}
