import rawProducts from './products.json';
import Product, { parseProducts } from 'dorflaedeli-product';

const products: Product[] | undefined = parseProducts(rawProducts);

class Data {
  static products: Product[] = products ? products : new Array<Product>();
}

export default Data;
