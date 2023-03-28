class ProductDetail {

  /* 파라미터 들어옴 */
  constructor(id){
    this.id = id;
    this.product = {};
  }

   /* 전체 상품 정보 가져오기 */ // 데이터가 없을때 예외처리 해주어야 함
   async getProductData(){
    const response = await fetch(`http://35.76.53.28:8080/mall/${this.id}`);
    const data = await response.json();

    this.product = await data
  }
  /* 상품 리스트 세팅하기 */
  async setProductList(){
    await this.getProductData();
    console.log('데이터 확인', this.product);
  }

  render(){
    const container = document.createElement('div');
    const element = document.createElement('h1');
    element.innerText = `${this.id} 상품 상세 페이지입니다.`;

    const anchor = document.createElement('a');
    anchor.href = '/';
    anchor.innerText = '상품 목록 페이지 이동';

    container.appendChild(anchor);
    container.appendChild(element);

    this.setProductList();

    return container

  }
}

export default ProductDetail