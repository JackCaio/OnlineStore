import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  constructor() {
    super();
    this.setStorageCart = this.setStorageCart.bind(this);
  }

  setStorageCart() {
    const { attCart, product } = this.props;
    if (localStorage.getItem('products') === null) {
      product.quantityPurchased = 1;
      localStorage.setItem('products', JSON.stringify([product]));
    } else {
      const list = JSON.parse(localStorage.getItem('products'));
      const contains = list.some((prod) => (prod.id === product.id));
      if (contains) {
        const cart = list.map((prod) => {
          if (prod.id === product.id) {
            prod.quantityPurchased += 1;
          }
          return prod;
        });
        localStorage.setItem('products', JSON.stringify(cart));
      } else {
        product.quantityPurchased = 1;
        localStorage.setItem('products', JSON.stringify([...list, product]));
      }
    }
    attCart();
  }

  render() {
    const { product: { thumbnail, title, price, id } } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{title}</p>
        <p>{price}</p>
        <Link to={ `/productCard/${id}` } data-testid="product-detail-link">Detalhe</Link>
        <button
          data-testid="product-add-to-cart"
          id={ id }
          type="button"
          onClick={ this.setStorageCart }
        >
          Comprar

        </button>
      </div>
    );
  }
}

Product.propTypes = {
  attCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    quantityPurchased: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
