export default class FavouriteView{
    constructor(onClickOption){
        this.onClickOption = onClickOption;
    }
    
    DOMAttachment = {
        navbarMenu: document.querySelector('.navbar-dropdown')
    }

    render(){
        return `<a class="navbar-item">
                    <div class="card"></div>
                </a>`;
    }
}