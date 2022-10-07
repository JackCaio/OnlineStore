import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.length === 0 && (<h4>Nenhum produto foi encontrado</h4>)}
        {products.length === 0 || products
          .map((prod) => <Product key={ prod.id } product={ prod } />)}
      </div>
    );
  }
}

ProductList.defaultProps = {
  products: [],
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  })),
};
