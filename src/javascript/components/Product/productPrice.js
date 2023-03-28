class ProductPrice {
  constructor(productPrice){
      this.productPrice = productPrice;
  }
  render(){
    const productPriceContainer = document.createElement('div');
    productPriceContainer.setAttribute('class', 'price m-price');

    const productPrice = document.createElement('strong');
    productPrice.setAttribute('class', 'price m-price');
    productPrice.innerText = this.productPrice;

    const priceType = document.createElement('span');
    priceType.innerText = '원';

    productPrice.appendChild(priceType);

    productPriceContainer.appendChild(productPrice);

    return productPriceContainer;
  }
}

export default ProductPrice