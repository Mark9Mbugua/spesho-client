import { combineReducers } from "redux";
import categories from './categories';
import category from './category';
import stores from './stores';
import items from './items';
import comments from './comments';
import auth from './auth';
import errors from './errors'; 

export default combineReducers({
    auth,
    categories,
    stores,
    items,
    category,
    comments,
    errors,
});