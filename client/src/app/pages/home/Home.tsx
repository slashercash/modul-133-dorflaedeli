import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeStyle from './HomeStyle';
import Api from '../../api/Api';
import Product from 'dorflaedeli-product';
import UiProduct from './uiproduct/UiProduct';

const Home = () => {
  const [products, setProducts] = useState(new Array<Product>());
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    Api.getProducts().then((products) => {
      if (isMounted) setProducts(products);
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  const uiProducts = products.map((product) => (
    <UiProduct key={products.findIndex((x) => x.id === product.id)} product={product} />
  ));

  return (
    <React.Fragment>
      <HomeStyle>
        <div>Home</div>
        <Link to="/cart">Zum Warenkorb</Link>
        <div className="products">{uiProducts}</div>
      </HomeStyle>
    </React.Fragment>
  );
};

export default Home;
