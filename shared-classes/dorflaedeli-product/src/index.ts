export interface IProduct {
  id: string;
  productName: string;
  specialOffer: number;
  normalPrice: number;
  imageName: string;
  description: string;
}

export default class Product implements IProduct {
  id: string;
  productName: string;
  specialOffer: number;
  normalPrice: number;
  imageName: string;
  description: string;

  constructor(product: IProduct) {
    this.id = product.id;
    this.productName = product.productName;
    this.specialOffer = product.specialOffer;
    this.normalPrice = product.normalPrice;
    this.imageName = product.imageName;
    this.description = product.description;
  }
}

export const parseProduct = (json: any): Product | undefined => {
  const BreakException = {};
  try {
    const iProduct: IProduct = json;

    if (
      typeof iProduct.id !== 'string' ||
      typeof iProduct.productName !== 'string' ||
      typeof iProduct.specialOffer !== 'number' ||
      typeof iProduct.normalPrice !== 'number' ||
      typeof iProduct.imageName !== 'string' ||
      typeof iProduct.description !== 'string'
    ) {
      throw BreakException;
    }

    const product: Product = new Product({
      id: iProduct.id,
      productName: iProduct.productName,
      specialOffer: iProduct.specialOffer,
      normalPrice: iProduct.normalPrice,
      imageName: iProduct.imageName,
      description: iProduct.description,
    });
    return product;
  } catch {
    return undefined;
  }
};

export const parseProducts = (json: any): Product[] | undefined => {
  const BreakException = {};
  try {
    const iProducts: IProduct[] = json;

    const products = new Array<Product>();
    iProducts.forEach((iproduct: IProduct) => {
      const product: Product | undefined = parseProduct(iproduct);
      if (product) {
        products.push(product);
      } else {
        throw BreakException;
      }
    });
    return products;
  } catch {
    return undefined;
  }
};
