import GeneralModel from "../general-output/general-model.js";
import SortView from "../sorting-output/sorting-view.js";

export default class SortController{
    //this used to accept onSorting
    constructor(pub){
        this.model = new GeneralModel();
        this.view = new SortView(this.onClick);
        this.pub = pub;

        this.model.loadProperties()
        .then(data=>{
            this.view.render(data);
        });
            
    }

    onClick = (ev)=>{
        this.pub.notifySubscribers(this.pub.events.SORT_ITEMS_BY, ev.target.innerText)

    }
}