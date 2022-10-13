import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import FormAvaliation from '../components/FormAvaliation';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      product: undefined,
    };
    this.setStorageCart = this.setStorageCart.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const request = await getProductById(id);
    this.setState({
      product: request,
    });
  }

  setStorageCart() {
    const { attCart } = this.props;
    const { product } = this.state;
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
          onClick={ this.handleAddToShoppingCart }
        >
          Carrinho de compras
        </button>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.setStorageCart }
        >
          Adicionar ao carrinho
        </button>
        <FormAvaliation productId={ product.id } />
      </main>
    );
  }
}

ProductCard.propTypes = {
  attCart: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  addtoCart: PropTypes.func,
}.isRequired;

export default ProductCard;
