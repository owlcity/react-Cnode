import {combineReducers} from 'redux';
import list from './list';
import user from './user';
import details from './details';

let reducer = combineReducers({
    list,
    user,
    details
})

export default reducer;
