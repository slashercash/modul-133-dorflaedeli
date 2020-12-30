import axios from 'axios';
import Product, { parseProduct, parseProducts } from 'dorflaedeli-product';

const baseURL = 'http://localhost:8080';

const axiosInstance = axios.create({ baseURL });

class Api {
  static getProducts = async (): Promise<Product[] | undefined> => {
    const response = await axiosInstance.get('/api/products');
    return parseProducts(response.data);
  };

  static getProduct = async (productId: string): Promise<Product | undefined> => {
    const response = await axiosInstance.get('/api/products/' + productId);
    return parseProduct(response.data);
  };

  static getImageUrl = (imageName: string) => baseURL + '/' + imageName;
}

export default Api;
