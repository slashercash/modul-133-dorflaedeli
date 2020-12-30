export interface ICartElement {
    productId: string;
    count: number;
}
export declare class CartElement implements ICartElement {
    productId: string;
    count: number;
    constructor(iCartElement: ICartElement);
}
export interface ICart {
    elements: CartElement[];
}
export default class Cart implements ICart {
    elements: CartElement[];
    constructor(iCart?: ICart);
}
export declare const parseCart: (json: any) => Cart | undefined;
