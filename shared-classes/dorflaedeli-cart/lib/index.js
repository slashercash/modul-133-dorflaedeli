"use strict";
exports.__esModule = true;
exports.parseCart = exports.CartElement = void 0;
var CartElement = /** @class */ (function () {
    function CartElement(iCartElement) {
        this.productId = iCartElement.productId;
        this.productName = iCartElement.productName;
        this.singlePrice = iCartElement.singlePrice;
        this.totalPrice = iCartElement.totalPrice;
        this.count = iCartElement.count;
    }
    return CartElement;
}());
exports.CartElement = CartElement;
var Cart = /** @class */ (function () {
    function Cart(iCart) {
        this.totalCartPrice = (iCart === null || iCart === void 0 ? void 0 : iCart.totalCartPrice) || 0;
        this.elements = (iCart === null || iCart === void 0 ? void 0 : iCart.elements) || new Array();
    }
    return Cart;
}());
exports["default"] = Cart;
var parseCart = function (json) {
    var BreakException = {};
    try {
        var iCardElements = json.elements;
        var totalCartPrice = json.totalCartPrice;
        if (!iCardElements || !totalCartPrice || typeof totalCartPrice !== 'number') {
            throw BreakException;
        }
        var cartElements_1 = new Array();
        iCardElements.forEach(function (iCartElement) {
            if (typeof iCartElement.productId !== 'string' ||
                typeof iCartElement.productName !== 'string' ||
                typeof iCartElement.singlePrice !== 'number' ||
                typeof iCartElement.totalPrice !== 'number' ||
                typeof iCartElement.count !== 'number') {
                throw BreakException;
            }
            var cardElement = new CartElement({
                productId: iCartElement.productId,
                productName: iCartElement.productName,
                singlePrice: iCartElement.singlePrice,
                totalPrice: iCartElement.totalPrice,
                count: iCartElement.count
            });
            cartElements_1.push(cardElement);
        });
        var icart = { totalCartPrice: totalCartPrice, elements: cartElements_1 };
        return new Cart(icart);
    }
    catch (_a) {
        return undefined;
    }
};
exports.parseCart = parseCart;
