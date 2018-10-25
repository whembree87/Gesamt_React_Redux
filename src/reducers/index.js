import { combineReducers } from 'redux';
import TranslateReducer from './reducer_translate';

const rootReducer = combineReducers({
    translations: TranslateReducer
});

export default rootReducer;