import ProductLikeButton from "./productLikeButton.js";

class ProductName {
  constructor(productName,id){
    this.productName = productName;
    this.productId = id;
  }
  render(){
    const productNameContainer = document.createElement('div');

    const productName = document.createElement('strong');
    productName.setAttribute('class', 'product-name');
    productName.innerText = this.productName + '!!'

    const productLikeButton = new ProductLikeButton(this.productId);

    productNameContainer.appendChild(productName);
    productNameContainer.appendChild(productLikeButton.render());

    return productNameContainer;
  }
}

export default ProductName