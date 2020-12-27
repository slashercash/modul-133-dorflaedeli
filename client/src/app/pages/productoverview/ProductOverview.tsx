import React, { useState, useEffect, useRef } from 'react';
import Api from '../../api/Api';
import Product from 'dorflaedeli-product';

interface IProductOverview {
  match: {
    params: {
      id: string;
    };
  };
}

const ProductOverview = ({ match }: IProductOverview) => {
  const [product, setProduct] = useState((): Product | undefined => undefined);
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    Api.getProduct(match.params.id).then((product) => {
      if (isMounted) setProduct(product);
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <React.Fragment>
      <span>{JSON.stringify(product)}</span>
    </React.Fragment>
  );
};

export default ProductOverview;
