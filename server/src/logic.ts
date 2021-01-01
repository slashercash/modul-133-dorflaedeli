import Product from 'dorflaedeli-product';
import Cart, { CartElement } from 'dorflaedeli-cart';

class Logic {
  static refreshCart = (cart: Cart | undefined, products: Product[]): Cart => {
    if (!cart) return new Cart();

    cart.elements.forEach((element: CartElement) => {
      const product: Product = products.find((product: Product) => element.productId === product.id);
      element.productName = product.productName;
      element.singlePrice = product.specialOffer;
      element.totalPrice = product.specialOffer * element.count;
    });

    cart.totalCartPrice = cart.elements.reduce((total: number, element: CartElement) => total + element.totalPrice, 0);

    return cart;
  };

  static putCartElement = (cart: Cart | undefined, product: Product): Cart => {
    if (!cart) cart = new Cart();

    const index: number = cart.elements.findIndex((element: CartElement) => element.productId === product.id);
    if (index >= 0) {
      cart.elements[index].count++;
    } else {
      cart.elements.push(new CartElement({ productId: product.id, count: 1 }));
    }

    return cart;
  };

  static deleteCartElement = (cart: Cart, index: number): Cart => {
    if (cart.elements[index].count === 1) {
      cart.elements.splice(index, 1);
    } else {
      cart.elements[index].count--;
    }

    return cart;
  };
}

export default Logic;
