
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    price: '[class="product-info-shelf"]',

    checkPrice: function (title) {
      this.waitForElement(this.price, 10);
      this.waitForText(title);
      this.see(title, this.price);
    }
  });

};
