import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class ListCategories extends Component {
  constructor() {
    super();
    this.categories = this.categories.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categories();
  }

  async categories() {
    const request = await getCategories();
    this.setState({
      categories: request,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div
        style={
          { height: '100vh',
            width: '300px',
            marginRight: '50px',
            display: 'inline-block',
            backgroundColor: 'blue' }
        }
      >
        <h1>ListCategories</h1>
        {
          categories.map((category) => (
            <li key={ category.id }>
              <label htmlFor={ `radio${category.id}` } data-testid="category">
                <input type="radio" name="radio" id={ `radio${category.id}` } />
              </label>
              {category.name}
            </li>
          ))
        }
      </div>
    );
  }
}
