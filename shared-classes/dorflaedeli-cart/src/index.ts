export interface ICartElement {
  productId: string;
  productName: string;
  singlePrice: number;
  totalPrice: number;
  count: number;
}

export class CartElement implements ICartElement {
  productId: string;
  productName: string;
  singlePrice: number;
  totalPrice: number;
  count: number;

  constructor(iCartElement: ICartElement) {
    this.productId = iCartElement.productId;
    this.productName = iCartElement.productName;
    this.singlePrice = iCartElement.singlePrice;
    this.totalPrice = iCartElement.totalPrice;
    this.count = iCartElement.count;
  }
}

export interface ICart {
  totalCartPrice: number;
  elements: CartElement[];
}

export default class Cart implements ICart {
  totalCartPrice: number;
  elements: CartElement[];

  constructor(iCart?: ICart) {
    this.totalCartPrice = iCart?.totalCartPrice || 0;
    this.elements = iCart?.elements || new Array<CartElement>();
  }
}

export const parseCart = (json: any): Cart | undefined => {
  const BreakException = {};
  try {
    const iCardElements: ICartElement[] = json.elements;
    const totalCartPrice: number = json.totalCartPrice;
    if (!iCardElements || !totalCartPrice || typeof totalCartPrice !== 'number') {
      throw BreakException;
    }

    let cartElements: CartElement[] = new Array<CartElement>();

    iCardElements.forEach((iCartElement: ICartElement) => {
      if (
        typeof iCartElement.productId !== 'string' ||
        typeof iCartElement.productName !== 'string' ||
        typeof iCartElement.singlePrice !== 'number' ||
        typeof iCartElement.totalPrice !== 'number' ||
        typeof iCartElement.count !== 'number'
      ) {
        throw BreakException;
      }

      const cardElement: CartElement = new CartElement({
        productId: iCartElement.productId,
        productName: iCartElement.productName,
        singlePrice: iCartElement.singlePrice,
        totalPrice: iCartElement.totalPrice,
        count: iCartElement.count,
      });

      cartElements.push(cardElement);
    });

    const icart: ICart = { totalCartPrice, elements: cartElements };
    return new Cart(icart);
  } catch {
    return undefined;
  }
};
