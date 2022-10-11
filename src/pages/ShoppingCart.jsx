import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: (localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products')) : [],
    };
  }

  render() {
    const { cartList } = this.state;
    return (
      <main>
        {
          (cartList.length === 0) ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          ) : (
            cartList.map((product) => (
              <div key={ product.id }>
                <div style={ { display: 'inline-block' } }>
                  <img src={ product.thumbnail } alt={ product.title } />
                </div>
                <div style={ { display: 'inline-block' } }>
                  <p
                    data-testid="shopping-cart-product-name"
                  >
                    {`nome ${product.title}`}
                  </p>
                  <p
                    data-testid="shopping-cart-product-quantity"
                  >
                    {`quantidade: ${product.quantityPurchased}`}
                  </p>
                </div>
              </div>
            ))
          )
        }
      </main>
    );
  }
}

export default ShoppingCart;
