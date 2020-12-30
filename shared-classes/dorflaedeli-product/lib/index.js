"use strict";
exports.__esModule = true;
exports.parseProducts = exports.parseProduct = void 0;
var Product = /** @class */ (function () {
    function Product(product) {
        this.id = product.id;
        this.productName = product.productName;
        this.specialOffer = product.specialOffer;
        this.normalPrice = product.normalPrice;
        this.imageName = product.imageName;
        this.description = product.description;
    }
    return Product;
}());
exports["default"] = Product;
var parseProduct = function (json) {
    var BreakException = {};
    try {
        var iProduct = json;
        if (typeof iProduct.id !== 'string' ||
            typeof iProduct.productName !== 'string' ||
            typeof iProduct.specialOffer !== 'number' ||
            typeof iProduct.normalPrice !== 'number' ||
            typeof iProduct.imageName !== 'string' ||
            typeof iProduct.description !== 'string') {
            throw BreakException;
        }
        var product = new Product({
            id: iProduct.id,
            productName: iProduct.productName,
            specialOffer: iProduct.specialOffer,
            normalPrice: iProduct.normalPrice,
            imageName: iProduct.imageName,
            description: iProduct.description
        });
        return product;
    }
    catch (_a) {
        return undefined;
    }
};
exports.parseProduct = parseProduct;
var parseProducts = function (json) {
    var BreakException = {};
    try {
        var iProducts = json;
        var products_1 = new Array();
        iProducts.forEach(function (iproduct) {
            var product = exports.parseProduct(iproduct);
            if (product) {
                products_1.push(product);
            }
            else {
                throw BreakException;
            }
        });
        return products_1;
    }
    catch (_a) {
        return undefined;
    }
};
exports.parseProducts = parseProducts;
