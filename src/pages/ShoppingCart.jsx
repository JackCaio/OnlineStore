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

  addQuantity = (id) => {
    const { cartList } = this.state;
    const index = cartList.map((prod) => prod.id).indexOf(id);
    cartList[index].quantityPurchased += 1;
    this.setState({
      cartList,
    });
    localStorage.setItem('products', JSON.stringify(cartList));
  };

  subQuantity = (id) => {
    const { cartList } = this.state;
    const index = cartList.map((prod) => prod.id).indexOf(id);
    if (cartList[index].quantityPurchased > 1) {
      cartList[index].quantityPurchased -= 1;
      this.setState({
        cartList,
      });
      localStorage.setItem('products', JSON.stringify(cartList));
    }
  };

  render() {
    const { cartList } = this.state;
    const quantity = { addQuantity: this.addQuantity, remQuantity: this.subQuantity };
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
