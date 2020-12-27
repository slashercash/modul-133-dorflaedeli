import React from 'react';
import Product from 'dorflaedeli-product';
import Api from '../../../api/Api';
import UiProductStyle from './UiProductStyle';

interface IUiProduct {
  product: Product;
}

const UiProduct = ({ product }: IUiProduct) => {
  const imageUrl = Api.getImageUrl(product.imageName);
  const normalPrice = 'CHF ' + product.normalPrice.toFixed(2);
  const specialOffer = 'CHF ' + product.specialOffer.toFixed(2);

  return (
    <React.Fragment>
      <UiProductStyle>
        <img src={imageUrl} />
        <div className="product-name">{product.productName}</div>
        <div className="product-price">
          <div className="special">{specialOffer}</div>
          <div className="normal">{normalPrice}</div>
        </div>
      </UiProductStyle>
    </React.Fragment>
  );
};

export default UiProduct;
