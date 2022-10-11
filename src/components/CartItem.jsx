import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CartItem extends Component {
  handleQuantity = (event) => {
    const { product: { id }, quantity } = this.props;
    const { name } = event.target;
    switch (name) {
    case 'plus':
      quantity.addQuantity(id);
      break;
    case 'minus':
    default:
      quantity.subQuantity(id);
    }
  };

  render() {
    const { product } = this.props;
    return (
      <div>
        <div style={ { display: 'inline-block' } }>
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
        <div style={ { display: 'inline-block' } }>
          <p data-testid="shopping-cart-product-name">
            {`nome ${product.title}`}
          </p>
          <p data-testid="shopping-cart-product-quantity">
            {product.quantityPurchased}
          </p>
        </div>
        <button
          name="minus"
          type="button"
          onClick={ this.handleQuantity }
          data-testid="product-decrease-quantity"
        >
          -

        </button>
        <button
          name="plus"
          type="button"
          onClick={ this.handleQuantity }
          data-testid="product-increase-quantity"
        >
          +

        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    quantityPurchased: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.shape({
    addQuantity: PropTypes.func,
    subQuantity: PropTypes.func,
  }).isRequired,
};
