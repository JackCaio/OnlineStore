import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { product: { thumbnail, title, price } } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{title}</p>
        <p>{price}</p>
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
