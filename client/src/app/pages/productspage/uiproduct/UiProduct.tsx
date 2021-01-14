import React from 'react';
import Product from 'dorflaedeli-product';
import Api from '../../../shared/api/Api';
import UiProductStyle from './UiProductStyle';
import { Link } from 'react-router-dom';
import Pricetag from '../../../shared/components/pricetag/Pricetag';

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
          <Pricetag normalPrice={product.normalPrice} specialOffer={product.specialOffer} />
        </div>
      </Link>
    </UiProductStyle>
  </React.Fragment>
);

export default UiProduct;
