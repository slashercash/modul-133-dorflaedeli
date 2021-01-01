import React, { useState, useEffect, useRef } from 'react';
import Api from '../../shared/api/Api';
import Cart, { CartElement } from 'dorflaedeli-cart';
import CartPageStyle from './CartPageStyle';
import CartListRow from './cartlistrow/CartListRow';

const CartPage = () => {
  const [cart, setCart] = useState((): Cart | undefined => undefined);
  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;
    Api.getCart().then((cart: Cart) => {
      if (isMounted.current) {
        setCart(cart);
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  if (!cart) return null;
  if (cart.elements.length === 0) return <h1>Ihr Warenkorb ist leer</h1>;

  const cartRows = cart.elements.map((cartElement: CartElement) => (
    <CartListRow
      key={cartElement.productId}
      cartElement={cartElement}
      onCountAdd={async () => {
        await Api.putCartElement(cartElement.productId);
        setCart(await Api.getCart());
      }}
      onCountSub={async () => {
        await Api.deleteCartElement(cartElement.productId);
        setCart(await Api.getCart());
      }}
    />
  ));

  return (
    <React.Fragment>
      <CartPageStyle>
        <h1>Warenkorb</h1>
        <div className="cart-list-header">
          <strong>Produkt</strong>
          <div>
            <strong>Einzelpreis</strong>
            <strong>Anzahl</strong>
            <strong>Total</strong>
          </div>
        </div>
        {cartRows}
      </CartPageStyle>
    </React.Fragment>
  );
};

export default CartPage;
