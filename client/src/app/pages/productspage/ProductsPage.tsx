import React, { useState, useEffect, useRef } from 'react';
import ProductsPageStyle from './ProductsPageStyle';
import Api from '../../shared/api/Api';
import Product from 'dorflaedeli-product';
import UiProduct from './uiproduct/UiProduct';
import ButtonLink from '../../shared/components/buttonlink/ButtonLink';

const getData = async (): Promise<{ products: Product[]; totalCartPrice: number }> => {
  const products: Product[] = await Api.getProducts();
  const totalCartPrice: number = (await Api.getCart()).totalCartPrice;
  return { products, totalCartPrice };
};

const ProductsPage = () => {
  const [products, setProducts] = useState(new Array<Product>());
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;
    getData().then(({ products, totalCartPrice }) => {
      if (isMounted.current) {
        setProducts(products);
        setTotalCartPrice(totalCartPrice);
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  const uiProducts = products.map((product) => <UiProduct key={product.id} product={product} />);

  return (
    <React.Fragment>
      <ProductsPageStyle>
        <ButtonLink to="/cart" buttonText={'Warenkorb: CHF ' + totalCartPrice.toFixed(2)} />
        <div className="products">{uiProducts}</div>
      </ProductsPageStyle>
    </React.Fragment>
  );
};

export default ProductsPage;
