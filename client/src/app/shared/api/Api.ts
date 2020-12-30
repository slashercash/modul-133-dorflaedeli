import axios from 'axios';
import Product, { parseProduct, parseProducts } from 'dorflaedeli-product';
import Cart, { parseCart } from 'dorflaedeli-cart';

const baseURL = 'http://localhost:8080';

const axiosInstance = axios.create({ baseURL });

class Api {
  static getProducts = async (): Promise<Product[] | undefined> => {
    const response = await axiosInstance.get('/api/products');
    if (response.status !== 200) alert('error on GET /api/products');
    return parseProducts(response.data);
  };

  static getProduct = async (productId: string): Promise<Product | undefined> => {
    const response = await axiosInstance.get('/api/products/' + productId);
    if (response.status !== 200) alert('error on GET /api/products/' + productId);
    return parseProduct(response.data);
  };

  static getCart = async (): Promise<Cart | undefined> => {
    const response = await axiosInstance.get('/api/cart', { withCredentials: true });
    if (response.status !== 200) alert('error on GET /api/cart/');
    return parseCart(response.data);
  };

  static postCart = async (cart: Cart): Promise<void> => {
    const response = await axiosInstance.post('/api/cart', cart, { withCredentials: true });
    if (response.status !== 200) alert('error on POST /api/cart/');
  };

  static getImageUrl = (imageName: string) => baseURL + '/' + imageName;
}

export default Api;
