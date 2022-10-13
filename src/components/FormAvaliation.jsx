import React from 'react';
import PropTypes from 'prop-types';

class FormAvaliation extends React.Component {
  state = {
    email: '',
    avaliation: '',
    comments: '',
    disabled: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateButtonEnable = (event) => {
    const { email, avaliation, comments } = this.state;
    if (email.length > 0 && avaliation.length > 0) {
      this.setState({
        disabled: false,
      });
    } else {
      event.preventDefault();
      this.setState({
        disabled: true,
      });
      return;
    }
    event.preventDefault();
    this.setState({
      email: '',
      avaliation: '',
      comments: '',
      disabled: false,
    });
    const obj = {
      email,
      text: comments,
      rating: avaliation,
    };
    this.saveItem(obj);
  };

  saveItem = (array) => {
    const { productId } = this.props;
    const rating = JSON.parse(localStorage.getItem(productId));
    if (!rating) {
      localStorage.setItem(productId, JSON.stringify([array]));
    } else {
      localStorage.setItem(productId, JSON.stringify([...rating, array]));
    }
  };

  getItem = () => {
    const { productId } = this.props;
    const rate = localStorage.getItem(productId);
    if (rate) {
      return JSON.parse(rate);
    } return [];
  };

  render() {
    const { avaliation, disabled, email, comments } = this.state;
    return (
      <>
        <form action="">
          <label htmlFor="e-mail">
            E-mail
            <input
              type="email"
              id="e-mail"
              onChange={ this.handleChange }
              name="email"
              data-testid="product-detail-email"
              value={ email }
            />
          </label>
          <label
            htmlFor="avaliation"
          >
            Avaliação
            <input
              type="radio"
              id="avaliation1"
              name="avaliation"
              value="1"
              checked={ avaliation === '1' }
              data-testid="1-rating"
              onChange={ this.handleChange }
            />
            1
            <input
              type="radio"
              id="avaliation2"
              name="avaliation"
              value="2"
              checked={ avaliation === '2' }
              data-testid="2-rating"
              onChange={ this.handleChange }
            />
            2
            <input
              type="radio"
              id="avaliation3"
              name="avaliation"
              value="3"
              checked={ avaliation === '3' }
              data-testid="3-rating"
              onChange={ this.handleChange }
            />
            3
            <input
              type="radio"
              id="avaliation4"
              name="avaliation"
              value="4"
              checked={ avaliation === '4' }
              data-testid="4-rating"
              onChange={ this.handleChange }
            />
            4
            <input
              type="radio"
              id="avaliation5"
              name="avaliation"
              value="5"
              checked={ avaliation === '5' }
              data-testid="5-rating"
              onChange={ this.handleChange }
            />
            5
          </label>
          <label htmlFor="coments">
            Comentário
            <textarea
              id="coments"
              onChange={ this.handleChange }
              name="comments"
              data-testid="product-detail-evaluation"
              value={ comments }
            />
          </label>
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.validateButtonEnable }
          >
            Avaliar

          </button>
          {disabled && <h1 data-testid="error-msg">Campos inválidos</h1>}
        </form>

        <div>
          {this.getItem().map((e) => (
            <>
              <p data-testid="review-card-email">{e.email}</p>
              <p data-testid="review-card-rating">{e.rating}</p>
              <p data-testid="review-card-evaluation">{e.text}</p>

            </>
          ))}
        </div>

      </>
    );
  }
}
FormAvaliation.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default FormAvaliation;
