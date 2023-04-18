import Component from "../../core/component.js";

class ProductPrice extends Component {



  render(){

    const productPriceContainer = document.createElement('div');
    productPriceContainer.setAttribute('class', 'product-price');

    const productPrice = document.createElement('strong');
    productPrice.setAttribute('class', 'price m-price');

    const priceType = document.createElement('span');
    priceType.innerText = '원';

    productPriceContainer.appendChild(productPrice);

    // 할인된 금액 계산
    if(this.props.discount > 0){
        const discountRateContainer = document.createElement('div');
        discountRateContainer.setAttribute('class','product-discount');

        const originPrice = document.createElement('strong');
        originPrice.setAttribute('class','price-strikethrough');
        originPrice.innerText = this.props.price.toLocaleString('ko-Kr') + priceType.innerText

        this.props.price = this.props.price - this.props.price*(0.01*this.props.discount)

        const discountRateDisplay = document.createElement('strong');
        discountRateDisplay.setAttribute('class','discount-rate');
        discountRateDisplay.innerText = this.props.discount + '%';

        discountRateContainer.append(originPrice);
        discountRateContainer.append(discountRateDisplay);
        productPriceContainer.append(discountRateContainer);

    }

    productPrice.innerText = this.props.price.toLocaleString('ko-Kr');
    productPrice.append(priceType);


    return productPriceContainer;
  }
}

export default ProductPrice