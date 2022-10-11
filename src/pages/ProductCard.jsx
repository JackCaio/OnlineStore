import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

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
    const { product } = this.state;
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
