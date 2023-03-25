class Router {

  constructor(routes){
      if(!routes){
        console.error('라우츠 초기화에 실패하였습니다.');
      }
      this.routes = routes;
  }

  init(rootElementId){
    if(!rootElementId){
      console.error('라우트 초기화에 실패했습니다, 초기 rootElemntId가 정의되지 않았습니다');
      return null;
    }
    this.rootElementId = rootElementId;

    this.routing(window.location.pathname);

    window.addEventListener('click', (e)=> {
      if(e.target.tagName.toLowerCase() === 'a'){
        e.preventDefault();
        this.routePush(e.target.href)
      }
    })
    
    /* history.back 또는 history.forward를 호출할때 발생하는 이벤트에 대한 핸들러 등록하는 메서드 */
    window.onpopstate = () => this.routing(window.location.pathname);
  }

  routePush(pathname){
    window.history.pushState({},null,pathname);
    this.routing(window.location.pathname)
  }

  routing(pathname){
    const [_, routeName, ...param] = pathname.split('/');
    let page = '';

    // url에 추가 경로가 있는지 확인
    if(this.routes[pathname]){
      const component = new this.routes[pathname]
      page = component.render();
    }

    if(page){
      this.render(page);
    }
  }

  render(page){
    const rootElement = document.querySelector(this.rootElementId);
    rootElement.innerHTML = '';
    rootElement.appendChild(page);
  }
}