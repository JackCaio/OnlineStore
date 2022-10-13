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
      product.quantityPurchased = 1;
      localStorage.setItem('products', JSON.stringify([product]));
    } else {
      const list = JSON.parse(localStorage.getItem('products'));
      const contains = list.some((prod) => (prod.id === product.id));
      if (contains) {
        list.forEach((prodCrr, index) => {
          if (prodCrr.id === product.id) {
            const productSelected = { ...prodCrr };
            productSelected.quantityPurchased += 1;
            console.log(list.splice(index, 1, productSelected));
          }
        });
        localStorage.setItem('products', JSON.stringify(list));
      } else {
        product.quantityPurchased = 1;
        localStorage.setItem('products', JSON.stringify([...list, product]));
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
    quantityPurchased: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
