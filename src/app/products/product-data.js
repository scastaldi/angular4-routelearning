"use strict";
var ProductData = (function () {
    function ProductData() {
    }
    ProductData.prototype.createDb = function () {
        var products = [
            {
                'id': 1,
                'productName': 'Drills',
                'productCode': 'DW511',
                'releaseDate': 'October 27, 2017',
                'description': 'DEWALT 1/2 in. Variable Speed Reversible Hammer Drill',
                'price': 19.95,
                'starRating': 3.2,
                'imageUrl': 'https://images.homedepot-static.com/productImages/803a8751-a33a-4b7f-aaef-005e1da8254c/svn/dewalt-hammer-drills-dw511-64_400_compressed.jpg',
                'category': 'Garden',
                'tags': ['drills', 'yard', 'home']
            },
            {
                'id': 2,
                'productName': 'Drill',
                'productCode': 'DCK240C2',
                'releaseDate': 'October 26, 2017',
                'description': '20-Volt MAX Lithium-Ion Cordless 1/2 in. Drill/Driver Kit with (2) Batteries 1.3Ah, Charger and Contractor Bag',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'https://images.homedepot-static.com/productImages/cb75d363-5120-4f2e-bffb-7bba61e4b3a1/svn/dewalt-power-tool-combo-kits-dck240c2-64_400_compressed.jpg',
                'category': 'Garden'
            },
            {
                'id': 5,
                'productName': 'Hammer',
                'productCode': 'DWHT51054',
                'releaseDate': 'May 21, 2017',
                'description': 'DEWALT 20 oz. Hammer',
                'price': 8.9,
                'starRating': 4.8,
                'imageUrl': 'https://images.homedepot-static.com/productImages/c275d0bb-5e98-412c-b1b1-8726fd1f1477/svn/dewalt-claw-hammers-dwht51054-64_1000.jpg',
                'category': 'Toolbox',
                'tags': ['tools', 'hammer', 'construction']
            },
            {
                'id': 8,
                'productName': 'Saw',
                'productCode': 'DW745',
                'releaseDate': 'October 15, 2016',
                'description': 'DEWALT 15 Amp 10 in. Compact Job Site Table Saw',
                'price': 11.55,
                'starRating': 3.7,
                'imageUrl': 'https://images.homedepot-static.com/productImages/3f75b59d-b153-45fd-ad06-052296e477f1/svn/dewalt-table-saws-dw745-64_1000.jpg',
                'category': 'Toolbox',
            },
            {
                'id': 10,
                'productName': 'Saw',
                'productCode': ' P4360A',
                'releaseDate': 'October 15, 2016',
                'description': 'ONE+ 8 in. 18-Volt Lithium-Ion Cordless Pole Saw - Battery and Charger Not Included',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'https://images.homedepot-static.com/productImages/d8a64319-042f-471d-87ea-46bcf4cdfedf/svn/ryobi-cordless-pole-saws-p4360a-64_1000.jpg',
                'category': 'Gaming',
            }
        ];
        return { products: products };
    };
    return ProductData;
}());
exports.ProductData = ProductData;
//# sourceMappingURL=product-data.js.map