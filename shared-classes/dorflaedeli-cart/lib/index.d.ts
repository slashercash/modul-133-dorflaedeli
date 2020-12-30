export interface ICartElement {
    productId: string;
    productName: string;
    singlePrice: number;
    totalPrice: number;
    count: number;
}
export declare class CartElement implements ICartElement {
    productId: string;
    productName: string;
    singlePrice: number;
    totalPrice: number;
    count: number;
    constructor(iCartElement: ICartElement);
}
export interface ICart {
    totalCartPrice: number;
    elements: CartElement[];
}
export default class Cart implements ICart {
    totalCartPrice: number;
    elements: CartElement[];
    constructor(iCart?: ICart);
}
export declare const parseCart: (json: any) => Cart | undefined;
