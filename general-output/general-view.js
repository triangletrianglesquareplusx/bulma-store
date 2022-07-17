export default class GeneralView{
    DOMAttachment = {
        header: document.querySelector('header'),
    }
    render(data){
        let str = data.map(item=>this.renderCard(item)).join('');
        this.DOMAttachment.header.innerHTML = str;
        this.addFavoriteButton();
    }
    
    renderCard({product_name,size,color,quantity,price_usd,subtype, manufacturer}){
        
        return `<div class="card is-flex-grow-1 m-4">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 is-underlined has-text-black">${manufacturer}</p>
              <p class="subtitle is-6">${product_name}</p>
              
            </div>
            
          </div>
      
          <div class="content">
            <p>Size: ${size}</p>
            <span class="has-text-weight-bold has-text-black">$${price_usd}</span>

            <br>
            
          </div>
          <footer class="card-footer is-centered">
              <a href="#" class="card-footer-item">Favourite</a>
          </footer>
        </div>
      </div>`

      
    }

    addFavoriteButton(){
      const optionsFav = [...this.DOMAttachment.header.querySelectorAll('.card-footer')];
      //now let's figure out what function this will be - within addEventListener!!!
      optionsFav.forEach(opt=>opt.addEventListener('click', (e)=>console.log(e.target.closest('div div.card-content'))));
      
    }

}