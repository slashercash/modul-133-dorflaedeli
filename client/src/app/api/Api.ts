import axios from 'axios';
import Product, { IProduct } from 'dorflaedeli-product';

const baseURL = 'http://localhost:8080';

const axiosInstance = axios.create({ baseURL });

class Api {
  static getProducts = async (): Promise<Product[]> => {
    const { data: iProducts } = await axiosInstance.get<IProduct[]>('/api/products');
    const products = new Array<Product>();
    iProducts.forEach((rawProduct: IProduct) => {
      products.push(new Product(rawProduct));
    });
    return products;
  };

  static getProduct = async (productId: string): Promise<Product> => {
    const { data: iProduct } = await axiosInstance.get<IProduct>('/api/products/' + productId);
    const product = new Product(iProduct);
    return product;
  };

  static getImageUrl = (imageName: string) => baseURL + '/' + imageName;
}

export default Api;
