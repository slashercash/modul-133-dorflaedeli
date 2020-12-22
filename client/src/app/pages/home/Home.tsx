import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/Api';
import Product from 'dorflaedeli-product';

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

  return (
    <React.Fragment>
      <div>Home</div>
      <Link to="/cart">Zum Warenkorb</Link>
      <div>{JSON.stringify(products)}</div>
    </React.Fragment>
  );
};

export default Home;
