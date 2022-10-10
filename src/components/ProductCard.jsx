import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  handleAddToShoppingCart = () => {
    const { history } = this.props;
    history.push('/shoppingCart');
  };

  render() {
    const {
      title,
      image,
      price,
    } = this.props;

    return (
      <main>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <div data-testid="product-detail-image">
          <img src={ image } alt={ title } />
        </div>
        <div>
          <p data-testid="product-detail-price">
            <span className="product-detail-price-symbol">{ 'R$ '}</span>
            {Math.floor(price * 100) / 100 }
          </p>
        </div>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.handleAddToShoppingCart }
        >
          Carrinho de compras
        </button>
      </main>
    );
  }
}

ProductCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductCard;
