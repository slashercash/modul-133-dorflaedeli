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
    constructor(product: IProduct);
}
