class Router {
//   const router = new Router({
//     '/': ProductPage,
//     '/detail' : ProductDetail
// })

/* 처음 실행 */
  constructor(routes){
      if(!routes){
        console.error('라우츠 초기화에 실패하였습니다.');
      } 
      this.routes = routes;
      // 
      for (const key in routes) {
          const route = routes[key];

          if(key.indexOf(':') > -1 ){
            const [_, routeName, param ] = key.split('/');
            this.routes['/' + routeName] = route;
            delete this.routes[key]
          } 
      }
      console.log('초기라우츠',this.routes);
  }
/* 초기화 순서상 2번째 */
  init(rootElementId){
    if(!rootElementId){
      console.error('라우트 초기화에 실패했습니다, 초기 rootElemntId가 정의되지 않았습니다');
      return null;
    }

    this.rootElementId = rootElementId;

    this.routing(window.location.pathname);

    window.addEventListener('click', (e)=> {

      // 클릭한 요소의 상위 요소 중 a태그가 있을때 상위 요소가 클릭했을때로 변경
      if(e.target.closest('a')){
        e.preventDefault();
        this.routePush(e.target.closest('a').href)
      }
    })
    
    /* history.back 또는 history.forward를 호출할때 발생하는 이벤트에 대한 핸들러 등록하는 메서드 */
    window.onpopstate = () => this.routing(window.location.pathname);
  }

  routePush(pathname){
    window.history.pushState({},null,pathname);
    this.routing(window.location.pathname)
  }

  /* 라우팅 메서드  */
  routing(pathname){
    // console.log('routing의 pathname', pathname);
    const [_, routeName, ...param] = pathname.split('/');
    let page = '';
    // /detail/10
    // 객체로 들어온 초기 라우터에 키값을 통해 넣어둔 클래스에 접근.
    if(this.routes[pathname]){
      const component = new this.routes[pathname]
      // 각 페이지 클래스에 있는 랜더 함수. 현재 router에 있는 랜더 메서드랑 다름.
      page = component.render();
    } else if(param){
      const component = new this.routes['/'+routeName](param)
      page = component.render();
    }
    
    if(page){
      this.render(page);
    }
  }

  /* 랜더링 */
  render(page){
    const rootElement = document.querySelector(this.rootElementId);
    rootElement.innerHTML = '';
    rootElement.appendChild(page);
  }
}

export default Router