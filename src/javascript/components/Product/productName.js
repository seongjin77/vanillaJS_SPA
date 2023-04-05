import Component from "../../core/component.js";
import ProductLikeButton from "./productLikeButton.js";

class ProductName extends Component {
  // 생략가능
  // constructor(props){
  //   super(props);
  // }

  render(){
    const productNameContainer = document.createElement('div');

    const productName = document.createElement('strong');
    productName.setAttribute('class', 'product-name sl-ellipsis');
    productName.innerText = this.props.name + '!!'

    productNameContainer.appendChild(productName);

    return productNameContainer;
  }
}

export default ProductName