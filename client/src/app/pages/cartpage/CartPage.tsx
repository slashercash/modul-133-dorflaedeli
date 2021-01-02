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

  const cartRows = cart?.elements.map((cartElement: CartElement) => (
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
        <table>
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Einzelpreis</th>
              <th>Anzahl</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{cartRows}</tbody>
          <tfoot>
            <tr>
              <td>
                <strong>CHF {cart?.totalCartPrice.toFixed(2)}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </CartPageStyle>
    </React.Fragment>
  );
};

export default CartPage;
