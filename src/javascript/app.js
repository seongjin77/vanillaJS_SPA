import {ProductDetail, ProductPage} from './pages/index.js';
import {Router} from './util/index.js';

export default class App {
  constructor(props){
    this.props = props;
  }
  setup(){
    const {el} = this.props;

    const router = new Router({
        '/': ProductPage,
        '/detail/:id' : ProductDetail,
       // '/detail/:id' : ProductDetail
    })
    // 초기화
    router.init(el);
  }
}