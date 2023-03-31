import Component from "../../core/component.js";

class ProductLikeButton extends Component {
  constructor(id){
    super(id)
    this.liked = this.checkLikeList();
  }

  checkLikeList(){
    if(!localStorage.getItem('likeList')){
      localStorage.setItem('likeList',JSON.stringify([]))
    }
    const likeList = JSON.parse(localStorage.getItem('likeList'));
    return likeList.includes(this.props.id);
  }

  addClickEvent(likeButton){
    likeButton.addEventListener('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();
      this.liked = !this.liked;
      const likeList = JSON.parse(localStorage.getItem('likeList'));

      if(this.liked){
        likeList.push(this.props.id);
        localStorage.setItem('likeList',JSON.stringify(likeList))
      }
      else{
        const deleteArr = likeList.filter(id => id !== this.props.id);
        localStorage.setItem('likeList',JSON.stringify(deleteArr))
      }

      e.target.classList.toggle('on');

    })
  }

  render(){
      const likeButton = document.createElement('button');
      likeButton.setAttribute('class','like-btn');
      this.liked && likeButton.classList.add('on');

      const likeButtonIr = document.createElement('span');
      likeButtonIr.setAttribute('class','ir');
      likeButtonIr.innerText = '좋아요 버튼';

      likeButton.appendChild(likeButtonIr);
      this.addClickEvent(likeButton);

      return likeButton 
  }
}

export default ProductLikeButton;