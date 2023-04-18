import Component from "../../core/component.js";
import createComponent from "../../core/createComponent.js";
import SectionHeading from './sectionHeading.js'

class ProductDetailInfo extends Component {
  render(){
    const productDetailInfo = document.createElement('section');
    productDetailInfo.setAttribute('class','product-detail-info');

    const sectionHeading = createComponent(SectionHeading, {text:'상품 상세 정보'});

    const productDatalist = document.createElement('dl');
    productDatalist.setAttribute('class','product-data');
    //상품 번호
    const dtProductId = document.createElement('dt');
    dtProductId.innerText = '상품 번호';

    const ddProductId = document.createElement('dd');
    ddProductId.innerText = this.props.product.id;

    // 상품 재고수량
    const dtProductStock = document.createElement('dt');
    dtProductStock.innerText = '재고 수량';

    const ddProductStock = document.createElement('dd');
    ddProductStock.innerText = this.props.product.stockCount;

    productDatalist.append(dtProductId,ddProductId,dtProductStock,ddProductStock);

    // 상세정보 이미지
    const productContent = document.createElement('div');
    productContent.setAttribute('class', 'product-content');

    const $fragment = document.createDocumentFragment();

    this.props.product.detailInfoImage.forEach(src => {
      const imgSrc = `https://test.api.weniv.co.kr/${src}`;
      const imgItem = document.createElement('img');
      imgItem.setAttribute('alt','상품 소개 이미지');
      imgItem.setAttribute('src',imgSrc);
      
      $fragment.append(imgItem);
    })
    productContent.append($fragment);
    
    productDetailInfo.append(sectionHeading,productDatalist,productContent);
    
    return productDetailInfo
  }
}

export default ProductDetailInfo