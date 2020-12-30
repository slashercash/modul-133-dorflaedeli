import React, { useState, useEffect, useRef } from 'react';
import Api from '../../shared/api/Api';
import Cart from 'dorflaedeli-cart';

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

  return <React.Fragment>{JSON.stringify(cart)}</React.Fragment>;
};

export default CartPage;
