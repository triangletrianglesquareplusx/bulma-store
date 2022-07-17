export default class SortView{
    constructor(onClickOption){
        this.onClickOption = onClickOption;
    }
    
    DOMAttachment = {
        div: document.querySelector('.nav-beg'),
    }

    

    renderOptions = (data) =>{
        // let items = this.types();
        // console.log(items);
        let result = data.map(item=>`<div class="dropdown-item"><a href='#'>${this.handleStringInput(item)}</a></div>`).join('');
        return result;

    }

    render(d){
        this.DOMAttachment.div.innerHTML = `<div class="dropdown is-hoverable m-4">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
            <span>Sort By</span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            ${this.renderOptions(d)}
          </div>
        </div>
      </div>`

      this.addListeners();
    }

    addListeners(){
        //find the element
        const options = [...this.DOMAttachment.div.querySelectorAll('.dropdown-item')];
        options.forEach(opt=>opt.addEventListener('click', this.onClickOption))
    }

    handleStringInput(str){
        //currently what we get with 'Product_type' is Product type. This can be done in a better way!!!
        return (str[0].toUpperCase() + str.substring(1)).replace('_', ' ');
    }
}