import PropTypes from 'prop-types';
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
    const { categoryId, handleInputChange } = this.props;
    return (
      <div className="category__list">
        <h1>ListCategories</h1>
        {
          categories.map((category) => (
            <li key={ category.id }>
              <label htmlFor={ `radio${category.id}` } data-testid="category">
                <input
                  type="radio"
                  name="categoryId"
                  id={ `radio${category.id}` }
                  checked={ categoryId === category.id }
                  onChange={ handleInputChange }
                  value={ category.id }
                />
              </label>
              {category.name}
            </li>
          ))
        }
      </div>
    );
  }
}

ListCategories.propTypes = {
  categoryId: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
