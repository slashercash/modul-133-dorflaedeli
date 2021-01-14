import React from 'react';
import PricetagStyle from './PricetagStyle';

interface IPricetag {
  normalPrice: number;
  specialOffer: number;
}

const Pricetag = ({ normalPrice, specialOffer }: IPricetag) => (
  <React.Fragment>
    <PricetagStyle>
      <strong>CHF {specialOffer ? specialOffer.toFixed(2) : normalPrice?.toFixed(2)}</strong>
      {specialOffer && <strong className="line-through">CHF {normalPrice?.toFixed(2)}</strong>}
    </PricetagStyle>
  </React.Fragment>
);

export default Pricetag;
