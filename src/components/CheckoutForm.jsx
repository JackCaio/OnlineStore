import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      payment: '',
      error: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  validaDados = () => {
    const { push } = this.props;
    const state = Object.entries(this.state);
    const fields = state.filter((el) => !el.includes('error'));
    const valid = fields.reduce((acc, cur) => {
      if (acc) {
        return cur[1].length >= 1;
      }
      return false;
    }, true);
    // valid: false - aparece mensagem
    if (!valid) {
      this.setState({
        error: true,
      });
      return;
    }
    // valid: true - limpa carrinho, redireciona para home
    localStorage.removeItem('products');
    // this.setState({
    //   error: false,
    // });
    push('/');
  };

  render() {
    const { fullName, email, cpf, phone, cep, address, payment, error } = this.state;
    return (
      <>
        {error && (<p data-testid="error-msg">Campos inválidos</p>)}
        <div>
          <label htmlFor="fullName">
            Nome Completo
            <input
              id="fullName"
              name="fullName"
              onChange={ this.handleChange }
              type="text"
              value={ fullName }
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              onChange={ this.handleChange }
              type="email"
              value={ email }
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="cpf">
            CPF
            <input
              id="cpf"
              name="cpf"
              onChange={ this.handleChange }
              type="text"
              value={ cpf }
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="phone">
            Tel
            <input
              id="phone"
              name="phone"
              onChange={ this.handleChange }
              type="text"
              value={ phone }
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="cep">
            CEP
            <input
              id="cep"
              name="cep"
              onChange={ this.handleChange }
              type="text"
              value={ cep }
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="address">
            Endereço
            <input
              id="address"
              name="address"
              onChange={ this.handleChange }
              type="text"
              value={ address }
              data-testid="checkout-address"
            />
          </label>
          <div className="payment">
            <label htmlFor="ticket">
              <input
                id="ticket"
                name="payment"
                onChange={ this.handleChange }
                type="radio"
                value="ticket"
                checked={ payment === 'ticket' }
                data-testid="ticket-payment"
              />
              Ticket
            </label>
            <label htmlFor="visa">
              <input
                id="visa"
                name="payment"
                onChange={ this.handleChange }
                type="radio"
                value="visa"
                checked={ payment === 'visa' }
                data-testid="visa-payment"
              />
              Visa
            </label>
            <label htmlFor="master">
              <input
                id="master"
                name="payment"
                onChange={ this.handleChange }
                type="radio"
                value="master"
                checked={ payment === 'master' }
                data-testid="master-payment"
              />
              MasterCard
            </label>
            <label htmlFor="elo">
              <input
                id="elo"
                name="payment"
                onChange={ this.handleChange }
                type="radio"
                value="elo"
                checked={ payment === 'elo' }
                data-testid="elo-payment"
              />
              Elo
            </label>
          </div>
          <button
            type="button"
            onClick={ this.validaDados }
            data-testid="checkout-btn"
          >
            Finaliza
          </button>
        </div>
      </>
    );
  }
}

CheckoutForm.propTypes = {
  push: PropTypes.func.isRequired,
};
