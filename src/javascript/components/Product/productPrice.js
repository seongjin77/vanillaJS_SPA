class ProductPrice {
  constructor(productPrice,discountRate){
      this.productPrice = productPrice;
      this.discountRate = discountRate;
  }
  render(){
    const productPriceContainer = document.createElement('div');
    productPriceContainer.setAttribute('class', 'price m-price');

    const productPrice = document.createElement('strong');
    productPrice.setAttribute('class', 'price m-price');

    const priceType = document.createElement('span');
    priceType.innerText = '원';

    productPriceContainer.appendChild(productPrice);

    // 할인된 금액 계산
    if(this.discountRate > 0){
        const discountRateContainer = document.createElement('div');
        discountRateContainer.setAttribute('class','price-discount');

        const originPrice = document.createElement('strong');
        originPrice.setAttribute('class','price-strikethrough');
        originPrice.innerText = this.productPrice;

        this.productPrice = this.productPrice - this.productPrice*(0.01*this.discountRate)

        const discountRateDisplay = document.createElement('strong');
        discountRateDisplay.setAttribute('class','discount-rate');
        discountRateDisplay.innerText = this.discountRate + '%';

        discountRateContainer.appendChild(originPrice);
        discountRateContainer.appendChild(priceType.cloneNode(true))
        discountRateContainer.appendChild(discountRateDisplay);
        productPriceContainer.appendChild(discountRateContainer);

    }

    productPrice.innerText = this.productPrice;
    productPrice.appendChild(priceType);
    

    return productPriceContainer;
  }
}

export default ProductPrice