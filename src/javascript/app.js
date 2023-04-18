import {CartPage, ProductDetail, ProductPage} from './pages/index.js';
import {Router} from './util/index.js';

export default class App {
  constructor(props){
    this.props = props;
  }
  setup(){
    const {el} = this.props;

    const router = new Router({
        '/vanillaJS_SPA': ProductPage,
        '/detail/:id' : ProductDetail,
        '/cart' : CartPage
    })
    // 초기화
    router.init(el);
  }
}