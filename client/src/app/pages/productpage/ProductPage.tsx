import React, { useState, useEffect, useRef } from 'react';
import Api from '../../shared/api/Api';
import Product from 'dorflaedeli-product';
import ProductPageStyle from './ProductPageStyle';
import ButtonLink from '../../shared/components/buttonlink/ButtonLink';
import Button from '../../shared/components/button/Button';

const getData = async (productId: string): Promise<{ product: Product; totalCartPrice: number; imageUrl: string }> => {
  const product: Product = await Api.getProduct(productId);
  const totalCartPrice: number = (await Api.getCart()).totalCartPrice;
  const imageUrl: string = Api.getImageUrl(product.imageName);
  return { product, totalCartPrice, imageUrl };
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
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState((): string | undefined => undefined);
  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;
    getData(match.params.id).then(({ product, totalCartPrice, imageUrl }) => {
      if (isMounted.current) {
        setProduct(product);
        setTotalCartPrice(totalCartPrice);
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
        <ButtonLink to="/cart" buttonText={'Warenkorb: CHF ' + totalCartPrice.toFixed(2)} />
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
                  setTotalCartPrice((await Api.getCart()).totalCartPrice);
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
