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
    productName.setAttribute('class', 'product-name');
    productName.innerText = this.props.name + '!!'

    const productLikeButton = new ProductLikeButton( {id : this.props.id});

    productNameContainer.appendChild(productName);
    productNameContainer.appendChild(productLikeButton.render());

    return productNameContainer;
  }
}

export default ProductName