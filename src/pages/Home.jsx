import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListCategories from '../components/ ListCategories';

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
    this.setState({
      [name]: value,
    });
  };

  searchProdQuery = async () => {
    const { prodSearch, categoryId } = this.state;
    const prods = await getProductsFromCategoryAndQuery(categoryId, prodSearch);
    this.setState({
      productsList: prods.results,
    });
  };

  render() {
    const { productsList, prodSearch } = this.state;
    return (
      <div>
        <ListCategories />
        <div style={ { display: 'inline-block' } }>
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
              onClick={ this.searchProdQuery }
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
        </div>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.handleAddToShoppingCart }
        >
          Comprar
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
