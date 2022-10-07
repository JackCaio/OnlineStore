import React, { Component } from 'react';
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
    );
  }
}
