import React, { Component } from 'react';
import ListCategories from '../components/ ListCategories';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }

  render() {
    const { productsList } = this.state;
    return (
      <div>
        <ListCategories />
        <div style={ { display: 'inline-block' } }>
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
      </div>
    );
  }
}
