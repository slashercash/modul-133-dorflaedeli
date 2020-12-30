import React, { useState, useEffect, useRef } from 'react';
import ProductsStyle from './ProductsStyle';
import Api from '../../shared/api/Api';
import Product from 'dorflaedeli-product';
import UiProduct from './uiproduct/UiProduct';
import ButtonLink from '../../shared/components/buttonLink/ButtonLink';

const Products = () => {
  const [products, setProducts] = useState(new Array<Product>());
  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;
    Api.getProducts().then((products) => {
      if (isMounted.current) setProducts(products);
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  const uiProducts = products.map((product) => <UiProduct key={product.id} product={product} />);

  return (
    <React.Fragment>
      <ProductsStyle>
        <ButtonLink to="/cart" buttonText="Zum Warenkorb" />
        <div className="products">{uiProducts}</div>
      </ProductsStyle>
    </React.Fragment>
  );
};

export default Products;
