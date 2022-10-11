import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  constructor() {
    super();
    this.setStorageCart = this.setStorageCart.bind(this);
  }

  setStorageCart() {
    const { product } = this.props;
    if (localStorage.getItem('products') === null) {
      localStorage.setItem('products', JSON.stringify([product.id]));
    } else {
      const list = JSON.parse(localStorage.getItem('products'));
      if (list.includes(product.id)) {
        localStorage.setItem('products', JSON.stringify(list));
      } else {
        localStorage.setItem('products', JSON.stringify([...list, product.id]));
      }
    }
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
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
