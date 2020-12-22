"use strict";
exports.__esModule = true;
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
