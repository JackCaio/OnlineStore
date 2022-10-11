import React from 'react';
import CartItem from '../components/CartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: (localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products')) : [],
    };
  }

  addQuantity = () => {
    console.log('add');
  };

  remQuantity = () => {
    console.log('rem');
  };

  render() {
    const { cartList } = this.state;
    const quantity = { addQuantity: this.addQuantity, remQuantity: this.remQuantity };
    return (
      <main>
        {
          (cartList.length === 0) ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          ) : (
            cartList.map((product) => (
              <CartItem key={ product.id } product={ product } quantity={ quantity } />
            ))
          )
        }
      </main>
    );
  }
}

export default ShoppingCart;
