import axios, { AxiosInstance } from 'axios';
import Product, { parseProduct, parseProducts } from 'dorflaedeli-product';
import Cart, { parseCart } from 'dorflaedeli-cart';

const baseURL = 'http://localhost:8080';

const axiosInstance: AxiosInstance = axios.create({ baseURL });

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

  static putCartElement = async (productId: string): Promise<void> => {
    const response = await axiosInstance.put('/api/cart/' + productId, {}, { withCredentials: true });
    if (response.status !== 200) alert('error on PUT /api/cart/' + productId);
  };

  static deleteCartElement = async (productId: string): Promise<void> => {
    const response = await axiosInstance.delete('/api/cart/' + productId, { withCredentials: true });
    if (response.status !== 200) alert('error on DELETE /api/cart/' + productId);
  };

  static putPurchase = async (firstName: string, lastName: string, email: string): Promise<number> => {
    const response = await axiosInstance.put('/api/purchase', { firstName, lastName, email }, { withCredentials: true });
    return response.status;
  };

  static getImageUrl = (imageName: string) => baseURL + '/' + imageName;
}

export default Api;
