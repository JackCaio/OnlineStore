import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }

  handleAddToShoppingCart = () => {
    const { history } = this.props;
    history.push('/shoppingCart');
  };

  render() {
    const { productsList } = this.state;

    return (
      <>
        <div>
          <h1>Home</h1>
          {
            (productsList.length === 0)
            && (
              <p
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
          }
        </div>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.handleAddToShoppingCart }
        >
          Comprar
        </button>
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
