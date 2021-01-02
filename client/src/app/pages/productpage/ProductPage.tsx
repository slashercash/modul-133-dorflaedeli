import React, { useState, useEffect, useRef } from 'react';
import Api from '../../shared/api/Api';
import Product from 'dorflaedeli-product';
import Cart, { CartElement } from 'dorflaedeli-cart';
import ProductPageStyle from './ProductPageStyle';
import ButtonLink from '../../shared/components/buttonlink/ButtonLink';
import Button from '../../shared/components/button/Button';

const getData = async (productId: string): Promise<{ product: Product; cart: Cart; imageUrl: string }> => {
  const product: Product = await Api.getProduct(productId);
  const cart: Cart = await Api.getCart();
  const imageUrl: string = Api.getImageUrl(product.imageName);
  return { product, cart, imageUrl };
};

interface IProductPage {
  match: {
    params: {
      id: string;
    };
  };
}

const ProductPage = ({ match }: IProductPage) => {
  const [product, setProduct] = useState((): Product | undefined => undefined);
  const [cart, setCart] = useState((): Cart | undefined => undefined);
  const [imageUrl, setImageUrl] = useState((): string | undefined => undefined);
  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;
    getData(match.params.id).then(({ product, cart, imageUrl }) => {
      if (isMounted.current) {
        setProduct(product);
        setCart(cart);
        setImageUrl(imageUrl);
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <React.Fragment>
      <ProductPageStyle>
        <ButtonLink to="/cart" buttonText="Zum Warenkorb" />
        <section>
          <img src={imageUrl} />
          <div>
            <div>
              <h1>{product?.productName}</h1>
              <p>{product?.description}</p>
              <Button
                buttonText="Zum Warenkorb hinzufügen"
                onClick={async () => {
                  await Api.putCartElement(product.id);
                  setCart(await Api.getCart());
                }}
              />
            </div>
          </div>
        </section>
      </ProductPageStyle>
    </React.Fragment>
  );
};

export default ProductPage;
