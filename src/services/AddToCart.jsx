export default function AddtoCart(product) {
  const shoppingCart = JSON.parse(localStorage.getItem('shoopingCart') || '[]');
  const gettingCounter = shoppingCart.findIndex((element) => element.id === product.id);
  const negativeCounter = -1;
  const newShoppingCart = [...shoppingCart];

  if (gettingCounter === negativeCounter) {
    newShoppingCart.push(product);
  } else {
    newShoppingCart.splice(gettingCounter, 0, product);
  }
  localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart));
}
