import GeneralModel from '../general-output/general-model.js'
import GeneralView from '../general-output/general-view.js';

export default class GeneralController{
    constructor(pub){
        this.model = new GeneralModel();
        this.view = new GeneralView();
        this.pub = pub;
        this.model
        .loadData()
        .then(d=>this.view.render(d));

        //this is a new line now utilising publisher object
        this.pub.subscribe(this.pub.events.SORT_ITEMS_BY, this.onSorting)
    }
    
    onSorting = (type)=>{
        
        const data = this.model.sortBy(type);
        this.view.render(data);
    }

    
}