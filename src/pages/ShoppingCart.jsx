import PropTypes from 'prop-types';
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
    if (cartList[index].quantityPurchased < cartList[index].available_quantity) {
      cartList[index].quantityPurchased += 1;
    } else {
      cartList.quantityPurchased = { ...cartList.available_quantity };
    }

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
    const { attCart } = this.props;
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
                attCart={ attCart }
              />
            ))
          )
        }
        <Link to="/checkout" data-testid="checkout-products">Finaliza</Link>
      </main>
    );
  }
}

ShoppingCart.propTypes = {
  attCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
