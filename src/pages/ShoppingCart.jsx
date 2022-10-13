import React from 'react';
import { Link } from 'react-router-dom';
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

  removeItem = (id) => {
    const { cartList } = this.state;
    const cart = cartList.filter((prod) => prod.id !== id);
    this.setState({
      cartList: cart,
    });
    localStorage.setItem('products', JSON.stringify(cart));
  };

  render() {
    const { cartList } = this.state;
    const itemHandler = {
      addQuantity: this.addQuantity,
      subQuantity: this.subQuantity,
      removeItem: this.removeItem };
    return (
      <main>
        {
          (cartList.length === 0) ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          ) : (
            cartList.map((product) => (
              <CartItem
                key={ product.id }
                product={ product }
                itemHandler={ itemHandler }
              />
            ))
          )
        }
        <Link to="/finaliza" data-testid="checkout-products">Finaliza</Link>
      </main>
    );
  }
}

export default ShoppingCart;
