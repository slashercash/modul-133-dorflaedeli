"use strict";
exports.__esModule = true;
exports.parseCart = exports.CartElement = void 0;
var CartElement = /** @class */ (function () {
    function CartElement(iCartElement) {
        this.productId = iCartElement.productId;
        this.count = iCartElement.count;
    }
    return CartElement;
}());
exports.CartElement = CartElement;
var Cart = /** @class */ (function () {
    function Cart(iCart) {
        this.elements = (iCart === null || iCart === void 0 ? void 0 : iCart.elements) || new Array();
    }
    return Cart;
}());
exports["default"] = Cart;
var parseCart = function (json) {
    var BreakException = {};
    try {
        var iCardElements = json.elements;
        if (!iCardElements) {
            throw BreakException;
        }
        var cartElements_1 = new Array();
        iCardElements.forEach(function (iCartElement) {
            if (typeof iCartElement.productId !== 'string' || typeof iCartElement.count !== 'number') {
                throw BreakException;
            }
            var cardElement = new CartElement({
                productId: iCartElement.productId,
                count: iCartElement.count
            });
            cartElements_1.push(cardElement);
        });
        var icart = { elements: cartElements_1 };
        return new Cart(icart);
    }
    catch (_a) {
        return undefined;
    }
};
exports.parseCart = parseCart;
