import Component from '../../core/component.js';
import {ProductImage, ProductPrice, ProductName} from '../Product/index.js';

class ProductCard extends Component {
  // constructor(item){
  //   this.item = item
  // }
  render(){
    const product = document.createElement('a');
    product.setAttribute('href', `/detail/${this.props.item.id}`);
    product.setAttribute('class', 'product-item');

    const productImage = new ProductImage({src: this.props.item.thumbnailImg});
    const productName = new ProductName({ name: this.props.item.productName, id: this.props.item.id});
    const productPrice = new ProductPrice({price: this.props.item.price, discount: this.props.item.discountRate});

    product.appendChild(productImage.render());
    product.appendChild(productName.render());
    product.appendChild(productPrice.render());

    return product
  }
}

export default ProductCard