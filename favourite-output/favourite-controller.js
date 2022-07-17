import FavouriteView from "../favourite-output/favourite-view.js"
import FavouriteModel from "../favourite-output/favourite-model.js"

export default class FavouriteController{
    constructor(pub){
        this.view = new FavouriteView(this.onClickOption);
        this.pub = pub;

    }
}