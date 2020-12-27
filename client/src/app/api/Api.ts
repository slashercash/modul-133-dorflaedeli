import axios from 'axios';
import Product, { IProduct } from 'dorflaedeli-product';

const baseURL = 'http://localhost:8080';

const axiosInstance = axios.create({ baseURL });

class Api {
  static getProducts = async (): Promise<Product[]> => {
    const response = await axiosInstance.get('/products');
    const products = new Array<Product>();
    response.data.forEach((rawProduct: IProduct) => {
      products.push(new Product(rawProduct));
    });
    return products;
  };

  static getImageUrl = (imageName: string) => baseURL + '/' + imageName;
}

export default Api;
