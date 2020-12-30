import React from 'react';
import Product from 'dorflaedeli-product';
import Api from '../../../api/Api';
import UiProductStyle from './UiProductStyle';
import { Link } from 'react-router-dom';

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
        <Link to={'/products/' + product.id}>
          <div className="product">
            <img src={imageUrl} />
            <div className="product-name">{product.productName}</div>
            <div className="product-price">
              <div className="special">{specialOffer}</div>
              <div className="normal">{normalPrice}</div>
            </div>
          </div>
        </Link>
      </UiProductStyle>
    </React.Fragment>
  );
};

export default UiProduct;
