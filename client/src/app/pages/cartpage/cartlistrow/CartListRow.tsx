import React from 'react';
import { CartElement } from 'dorflaedeli-cart';

interface ICartListRow {
  cartElement: CartElement;
}

const CartListRow = ({ cartElement }: ICartListRow) => {
  const singlePrice: string = 'CHF ' + cartElement.singlePrice.toFixed(2);
  const totalPrice: string = 'CHF ' + cartElement.totalPrice.toFixed(2);

  return (
    <React.Fragment>
      <div className="cart-list-row">
        <span>{cartElement.productName}</span>
        <div>
          <span>{singlePrice}</span>
          <span>[-] {cartElement.count} [+]</span>
          <span>{totalPrice}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartListRow;
