import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import AddtoCart from '../services/AddToCart';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      product: undefined,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const request = await getProductById(id);
    this.setState({
      product: request,
    });
  }

  handleAddToShoppingCart = () => {
    const { history } = this.props;
    history.push('/shoppingCart');
  };

  render() {
    const { product } = this.state;

    if (!product) {
      return <p>Carregando...</p>;
    }
    return (
      <main>
        <h3 data-testid="product-detail-name">{ product.title }</h3>
        <div data-testid="product-detail-image">
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
        <div>
          <p data-testid="product-detail-price">
            <span className="product-detail-price-symbol">{ 'R$ '}</span>
            {Math.floor(product.price * 100) / 100 }
          </p>
        </div>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.handleAddToShoppingCart }
        >
          Carrinho de compras
        </button>

        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => AddtoCart(product.title) }
        >
          Adicionar ao carrinho
        </button>
        ;
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
  addtoCart: PropTypes.func,
}.isRequired;

export default ProductCard;
