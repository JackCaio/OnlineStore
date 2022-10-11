import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: (localStorage.getItem('products'))
        ? localStorage.getItem('products') : [],
    };
  }

  render() {
    const { cartList } = this.state;
    return (
      <main>
        {
          (cartList.length === 0) && (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )
        }
      </main>
    );
  }
}

export default ShoppingCart;
