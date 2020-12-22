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
