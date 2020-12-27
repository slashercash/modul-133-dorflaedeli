import React from 'react';
import Product from 'dorflaedeli-product';
import Api from '../../../api/Api';
import UiProductStyle from './UiProductStyle';

interface IUiProduct {
  product: Product;
}

const UiProduct = ({ product }: IUiProduct) => {
  const imageUrl = Api.getImageUrl(product.imageName);
  return (
    <React.Fragment>
      <UiProductStyle>
        <img src={imageUrl} />
      </UiProductStyle>
    </React.Fragment>
  );
};

export default UiProduct;
