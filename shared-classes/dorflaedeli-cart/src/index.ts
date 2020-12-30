export interface ICartElement {
  productId: string;
  count: number;
}

export class CartElement implements ICartElement {
  productId: string;
  count: number;

  constructor(iCartElement: ICartElement) {
    this.productId = iCartElement.productId;
    this.count = iCartElement.count;
  }
}

export interface ICart {
  elements: CartElement[];
}

export default class Cart implements ICart {
  elements: CartElement[];

  constructor(iCart?: ICart) {
    this.elements = iCart?.elements || new Array<CartElement>();
  }
}

export const parseCart = (json: any): Cart | undefined => {
  const BreakException = {};
  try {
    const iCardElements: ICartElement[] = json.elements;
    if (!iCardElements) {
      throw BreakException;
    }

    let cartElements: CartElement[] = new Array<CartElement>();

    iCardElements.forEach((iCartElement: ICartElement) => {
      const cardElement: CartElement = new CartElement({
        productId: iCartElement.productId as string,
        count: iCartElement.count as number,
      });
      if (typeof cardElement.productId !== 'string' || typeof cardElement.count !== 'number') {
        throw BreakException;
      }
      cartElements.push(cardElement);
    });

    const icart: ICart = { elements: cartElements };
    return new Cart(icart);
  } catch {
    return undefined;
  }
};
