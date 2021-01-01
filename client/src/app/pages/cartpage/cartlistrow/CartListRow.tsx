import React from 'react';
import { CartElement } from 'dorflaedeli-cart';
import Button from '../../../shared/components/button/Button';

interface ICartListRow {
  cartElement: CartElement;
  onCountAdd: () => void;
  onCountSub: () => void;
}

const CartListRow = ({ cartElement, onCountAdd, onCountSub }: ICartListRow) => {
  const singlePrice: string = 'CHF ' + cartElement.singlePrice.toFixed(2);
  const totalPrice: string = 'CHF ' + cartElement.totalPrice.toFixed(2);

  return (
    <React.Fragment>
      <div className="cart-list-row">
        <span>{cartElement.productName}</span>
        <div>
          <span>{singlePrice}</span>
          <div>
            <Button buttonText="-" onClick={onCountSub} />
            <span>{cartElement.count}</span>
            <Button buttonText="+" onClick={onCountAdd} />
          </div>
          <span>{totalPrice}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartListRow;
