import Component from "../core/component.js";
import createComponent from "../core/createComponent.js";
import { ProductDetailInfo, ProductBasicInfo } from "../components/ProductDetail/index.js";

class ProductDetail extends Component {

  /* 파라미터 들어옴 */
  constructor(props){
    super(props)
    this.state = {
      product : {},
      isLoaded : false
    }
    this.getProductData();
  }

   /* 전체 상품 정보 가져오기 */ 
   async getProductData(){

    const response = await fetch(`http://35.76.53.28:8080/mall/${this.props.id}`);
    const data = await response.json();

    this.setState({product: data , isLoaded : true});
  } 


  render(){
  
    const container = document.createElement('article');
    container.setAttribute('class','product-detail');

    const heading = document.createElement('h1');
    heading.setAttribute('class','ir');
    heading.innerText = '상품 상세 정보 페이지';

    const contentWrap = document.createElement('div');
    contentWrap.setAttribute('class','content-wrap');

    if(this.state.isLoaded){
      //기본 정보
      const productBasicInfo =createComponent(ProductBasicInfo,{product: this.state.product})
      // 상세정보
      const productDetailInfo = createComponent(ProductDetailInfo, {product: this.state.product})
  
      contentWrap.append(productBasicInfo,productDetailInfo);
    }


    container.append(contentWrap)



    return container

  }
}

export default ProductDetail