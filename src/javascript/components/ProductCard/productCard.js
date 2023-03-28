import {ProductImage, ProductPrice, ProductName} from '../Product/index.js';

class ProductCard {
  constructor(item){
    this.item = item
  }
  render(){
    const product = document.createElement('a');
    product.setAttribute('href', `/detail/${this.item.id}`);
    product.setAttribute('class', 'product-item');

    const productImage = new ProductImage(this.item.thumbnailImg).render();
    const productName = new ProductName(this.item.productName).render();
    const productPrice = new ProductPrice(this.item.price).render();

    product.appendChild(productImage);
    product.appendChild(productName);
    product.appendChild(productPrice);

    return product
  }
}

export default ProductCard