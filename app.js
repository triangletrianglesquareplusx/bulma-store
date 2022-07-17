import GeneralController from '../general-output/general-controller.js'
import SortController from '../sorting-output/sorting-controller.js';
import FavouriteController from '../favourite-output/favourite-controller.js';
import Publisher from './publisher.js';

const publisher = new Publisher();
//publisher objest is dispatched to general controller
const gController = new GeneralController(publisher);

//used to be const sController = new SortController(gController.onSorting)
const sController = new SortController(publisher);

const fController = new FavouriteController(publisher);
