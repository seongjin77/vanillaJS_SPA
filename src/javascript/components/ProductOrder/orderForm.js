import Component from "../../core/component.js";
import createComponent from "../../core/createComponent.js";

class OrderForm extends Component {
  render(){
    const orderForm = document.createElement('form');
    orderForm.setAttribute("class",'product-order-form');

    const productOptionContainer = document.createElement('div');
    productOptionContainer.setAttribute('class','product-option');

    const delivertyTitle = document.createElement("span");
    delivertyTitle.setAttribute('class','delivery-title');
    delivertyTitle.innerText = `택배 배송 / ${this.props.product.shippingFee > 0 ? this.props.product.shippingFee + '원' : '무료 배송'}`

    const quntityInput = createComponent()

    productOptionContainer.append(delivertyTitle);
    orderForm.append(productOptionContainer)

    return orderForm
  }
}

export default OrderForm