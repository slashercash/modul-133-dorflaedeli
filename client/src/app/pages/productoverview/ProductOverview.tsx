import React, { useState, useEffect, useRef } from 'react';
import Api from '../../shared/api/Api';
import Product from 'dorflaedeli-product';
import ProductoverviewStyle from './ProductoverviewStyle';
import ButtonLink from '../../shared/components/buttonLink/ButtonLink';

interface IProductOverview {
  match: {
    params: {
      id: string;
    };
  };
}

const ProductOverview = ({ match }: IProductOverview) => {
  const [product, setProduct] = useState((): Product | undefined => undefined);
  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;
    Api.getProduct(match.params.id).then((product) => {
      if (isMounted.current) setProduct(product);
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  const imageUrl: string | undefined = product ? Api.getImageUrl(product.imageName) : undefined;

  return (
    <React.Fragment>
      <ProductoverviewStyle>
        <div className="top-row">
          <ButtonLink to="/cart" buttonText="Zum Warenkorb" />
        </div>
        <img src={imageUrl} />
        <div>
          <div>
            <h1 className="product-name">{product?.productName}</h1>
            <p>{product?.description}</p>
            <button>Warenkorb</button>
          </div>
        </div>
      </ProductoverviewStyle>
    </React.Fragment>
  );
};

export default ProductOverview;
