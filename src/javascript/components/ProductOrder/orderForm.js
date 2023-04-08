import {createComponent,Component} from "../../core/index.js";
import {OptionSelector, QuantityInput} from "./index.js";

class OrderForm extends Component {
  constructor(props){
    console.log('확인',props);
    super(props);
    this.state = {
      quantity: 1
      
    }
  }

  increaseQuantity(){
    const newQuantity = (this.state.quantity + 1);
    if(newQuantity >  this.props.product.stockCount) return;
    this.setState({quantity: newQuantity });
  }
  decreaseQuantity(){
    const newQuantity = (this.state.quantity -1);
    if(newQuantity <  1) return;
    this.setState({quantity: newQuantity})
  }
  onchangeQuantityInput(e){
    e.preventDefault();
    const maxQuantity = this.props.product.stockCount;
    const newQuantity = Number(e.target.value);
    if(e.target.value> maxQuantity) this.setState({quantity: maxQuantity})
    else if(e.target.value<1) this.setState({quantity: 1})
    else this.setState({quantity: newQuantity})
  }

  render(){
    const orderForm = document.createElement('form');
    orderForm.setAttribute("class",'product-order-form');

    const productOptionContainer = document.createElement('div');
    productOptionContainer.setAttribute('class','product-option');

    const deliveryTitle = document.createElement("span");
    deliveryTitle.setAttribute('class','delivery-title');
    deliveryTitle.innerText = `택배 배송 / ${this.props.product.shippingFee > 0 ? this.props.product.shippingFee.toLocaleString('ko-Kr') + '원' : '무료 배송'}`

    const selectedProductContainer = document.createElement('div');
    selectedProductContainer.setAttribute('class','selected-product');

    if(this.props.product.option.length>0){
      // 옵션이 있을떄
     const optionSelector = createComponent(OptionSelector,{option: this.props.product.option})
      selectedProductContainer.append(optionSelector);
    }else{
      // 옵션이 없을떄
      const quantityInput = createComponent(QuantityInput, {...this.props,
        quantity: this.state.quantity,
        increaseQuantity: this.increaseQuantity.bind(this),
        decreaseQuantity: this.decreaseQuantity.bind(this),
        onchangeQuantityInput: this.onchangeQuantityInput.bind(this)
      })
      selectedProductContainer.append(quantityInput);
    }

   
    const totalPriceContainer = document.createElement("div");
    totalPriceContainer.setAttribute('class','total-price');

    const totalPriceTitle = document.createElement('span');
    totalPriceTitle.setAttribute('class','title');
    totalPriceTitle.innerText = '총 상품금액';

    const totalOrderInfo = document.createElement("div");
    totalOrderInfo.setAttribute('class','total-order-info');

    const productQuantity = document.createElement('strong');
    productQuantity.setAttribute('class','quantity');

    const productQuantityNum = document.createElement('span');
    // 임시
    productQuantityNum.innerText = this.state.quantity.toLocaleString('ko-Kr')

    productQuantity.append('총 수량',productQuantityNum,'개');

    const totalPrice = document.createElement("strong");
    totalPrice.setAttribute("class",'price l-price');
    totalPrice.innerText = (this.props.product.price * this.state.quantity).toLocaleString('ko-Kr');

    const priceType = document.createElement('span');
    priceType.innerText = '원';
    totalPrice.append(priceType);

    totalOrderInfo.append(productQuantity,totalPrice)    

    totalPriceContainer.append(totalPriceTitle,totalOrderInfo)

    productOptionContainer.append(deliveryTitle,selectedProductContainer);
    orderForm.append(productOptionContainer,totalPriceContainer)

    return orderForm
  }
}

export default OrderForm