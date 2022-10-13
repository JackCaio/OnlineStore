import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CartItem extends Component {
  handleQuantity = (event) => {
    const { product: { id }, itemHandler } = this.props;
    const { name } = event.target;
    switch (name) {
    case 'plus':
      itemHandler.addQuantity(id);
      break;
    case 'minus':
      itemHandler.subQuantity(id);
      break;
    case 'remove':
    default:
      itemHandler.removeItem(id);
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
        <button
          name="remove"
          type="button"
          onClick={ this.handleQuantity }
          data-testid="remove-product"
        >
          Remove
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
  itemHandler: PropTypes.shape({
    addQuantity: PropTypes.func,
    subQuantity: PropTypes.func,
    removeItem: PropTypes.func,
  }).isRequired,
};
