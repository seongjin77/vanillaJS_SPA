import Component from "../../core/component.js";
import createComponent from "../../core/createComponent.js";
import SectionHeading from "./sectionHeading.js";
import {ProductImage,ProductName,ProductPrice} from "../Product/index.js";
import OrderForm from "../ProductOrder/orderForm.js";


class ProductBasicInfo extends Component {

  render(){
    const basicInfoSection = document.createElement('section');
    basicInfoSection.setAttribute('class','product-basic-info');

    const sectionHeading = createComponent(SectionHeading, {text:'기본 정보 및 상품 옵션'});
    const productImage = createComponent(ProductImage,{src: this.props.product.thumbnailImg })

    const productInfoContainer = document.createElement('div');
    productInfoContainer.setAttribute('class','product-info');
    
    const productNamePriceContainer = document.createElement('div');
    productNamePriceContainer.setAttribute('class','product-name-price');

    const productName =createComponent(ProductName,{name:this.props.product.productName});
    const productPrice = createComponent(ProductPrice,{price: this.props.product.price, discountRate: this.props.product.discountRate});
    productNamePriceContainer.append(productName,productPrice);
    
    const orderForm = createComponent(OrderForm, {product: this.props.product})

    productInfoContainer. append(productNamePriceContainer,orderForm)
    basicInfoSection.append(sectionHeading,productImage,productInfoContainer)
    return basicInfoSection
  }
}

export default ProductBasicInfo