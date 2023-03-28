class ProductName {
  constructor(productName){
    this.productName = productName;
  }
  render(){
    const productName = document.createElement('strong');
    productName.setAttribute('class', 'product-name');
    productName.innerText = this.productName + '!!'

    return productName;
  }
}

export default ProductName