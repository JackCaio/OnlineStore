import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ListCategories from '../components/ListCategories';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      productsList: undefined,
      prodSearch: '',
      categoryId: '',
    };
  }

  handleAddToShoppingCart = () => {
    const { history } = this.props;
    history.push('/shoppingCart');
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    if (name === 'categoryId') this.searchProducts();
    this.setState({
      [name]: value,
    });
  };

  searchProducts = async () => {
    const { prodSearch, categoryId } = this.state;
    const prods = await getProductsFromCategoryAndQuery(categoryId, prodSearch);
    this.setState({
      productsList: prods.results,
    });
  };

  render() {
    const { productsList, prodSearch, categoryId } = this.state;
    return (
      <div className="home__display">
        <ListCategories
          categoryId={ categoryId }
          handleInputChange={ this.handleInputChange }
        />
        <div className="home__content">
          <h1>Home</h1>
          <label htmlFor="prodSearch">
            <input
              id="prodSearch"
              name="prodSearch"
              type="text"
              placeholder="Busca"
              data-testid="query-input"
              value={ prodSearch }
              onChange={ this.handleInputChange }
            />
            <button
              type="button"
              onClick={ this.searchProducts }
              data-testid="query-button"
            >
              Buscar
            </button>
          </label>
          { (productsList === undefined) && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) }
          {Array.isArray(productsList) && <ProductList products={ productsList } />}
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ this.handleAddToShoppingCart }
          >
            Comprar
          </button>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
