import React, { Component } from 'react';

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
    );
  }
}
