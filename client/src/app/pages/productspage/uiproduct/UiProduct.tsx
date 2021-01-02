import React from 'react';
import Product from 'dorflaedeli-product';
import Api from '../../../shared/api/Api';
import UiProductStyle from './UiProductStyle';
import { Link } from 'react-router-dom';

interface IUiProduct {
  product: Product;
}

const UiProduct = ({ product }: IUiProduct) => (
  <React.Fragment>
    <UiProductStyle>
      <Link to={'/products/' + product.id}>
        <div className="product">
          <img src={Api.getImageUrl(product.imageName)} />
          <div className="product-name">{product.productName}</div>
          <div className="product-price">
            <div className="special">CHF {product.specialOffer.toFixed(2)}</div>
            <div className="normal">CHF {product.normalPrice.toFixed(2)}</div>
          </div>
        </div>
      </Link>
    </UiProductStyle>
  </React.Fragment>
);

export default UiProduct;
