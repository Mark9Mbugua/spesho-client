import { combineReducers } from "redux";
import categories from './categories';
import category from './category';
import stores from './stores';
import items from './items';

export default combineReducers({
    categories,
    stores,
    items,
    category
});