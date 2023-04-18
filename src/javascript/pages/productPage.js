import {LinkToCart} from "../components/Button/index.js";
import { ProductCard } from "../components/ProductCard/index.js";
import Component from "../core/component.js";
import {createComponent} from "../core/index.js";

class ProductPage extends Component {
    constructor() {
        super()
        this.state = {
            product : []
        }
        this.getProductData();
    }

    /* 전체 상품 정보 가져오기 */
    async getProductData() {
        const response = await fetch("http://35.76.53.28:8080/mall");
        const data = await response.json();
        this.setState({product: data})
    }

    render() {
        this.mainElement = document.createElement("main");

        this.mainElement.classList.add("product");

        const productPageHeader = document.createElement('h1');
        productPageHeader.setAttribute('class', 'ir');
        productPageHeader.innerText = '상품목록 페이지';
        this.mainElement.appendChild(productPageHeader);

        const productList = document.createElement('ul');
        productList.setAttribute('class', 'product-list');

        const $fragment = document.createDocumentFragment();

        this.state.product.forEach((item) => {
       
            const productItem = document.createElement('li');
            productItem.setAttribute('class', 'product-item');
            if(item.stockCount < 1){
                productItem.classList.add('sold-out')
            }
            const productCard = new ProductCard({item: item});
            productItem.append(productCard.render());
            $fragment.appendChild(productItem);
        });
        // 최적화 부분
        const linkToCart = createComponent(LinkToCart,{})
        
        productList.appendChild($fragment);
        this.mainElement.append(productList,linkToCart)
        return this.mainElement;
    }
}

export default ProductPage;
