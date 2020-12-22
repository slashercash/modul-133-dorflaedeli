import rawProducts from './products.json';
import Product, { IProduct } from 'dorflaedeli-product';

const products = new Array<Product>();

rawProducts.forEach((rawProduct: IProduct) => {
  products.push(new Product(rawProduct));
});

class Data {
  static products = products;
}

export default Data;
