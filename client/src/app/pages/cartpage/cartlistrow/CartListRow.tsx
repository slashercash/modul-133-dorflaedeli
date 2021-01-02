import React from 'react';
import { CartElement } from 'dorflaedeli-cart';
import Button from '../../../shared/components/button/Button';
import { Link } from 'react-router-dom';

interface ICartListRow {
  cartElement: CartElement;
  onCountAdd: () => void;
  onCountSub: () => void;
}

const CartListRow = ({ cartElement, onCountAdd, onCountSub }: ICartListRow) => (
  <React.Fragment>
    <tr>
      <td>
        <Link to={'/products/' + cartElement.productId}>{cartElement.productName}</Link>
      </td>
      <td>CHF {cartElement.singlePrice.toFixed(2)}</td>
      <td>
        <Button buttonText="-" onClick={onCountSub} />
        <span>{cartElement.count}</span>
        <Button buttonText="+" onClick={onCountAdd} />
      </td>
      <td>CHF {cartElement.totalPrice.toFixed(2)}</td>
    </tr>
  </React.Fragment>
);

export default CartListRow;
