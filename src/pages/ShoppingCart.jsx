import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  renderCartItems = () => {
    // const {
    //   removeItemBtn,
    //   decreaseItemBtn,
    //   increaseItemBtn,
    // } = this.props;

    const itemList = cartList.map((item) => {
      const { id, title, price, quantity, thumbnail } = item;
      return (
        <>
          <cartItems
            key={ id }
            data-testid="shopping-cart-product-name"
            title={ title }
            quantity={ quantity }
            price={ price }
            thumbnail={ thumbnail }
            id={ id }
            // removeItemBtn={ removeItemBtn }
            // decreaseItemBtn={ decreaseItemBtn }
            // increaseItemBtn={ increaseItemBtn }
          />
          <div>
            <span data-testid="shopping-cart-product-name">{ title }</span>
          </div>
          <div>
            `R$ $
            {price}
            `
          </div>
          <div>
            <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
          </div>
        </>
      );
    });

    return (
      <section>{ itemList }</section>
    );
  };

  render() {
    const { cartList } = this.state;

    return (
      <main>
        {
          (cartList.length === 0) ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )
            : this.renderCartItems()
        }
      </main>
    );
  }
}

export default ShoppingCart;
