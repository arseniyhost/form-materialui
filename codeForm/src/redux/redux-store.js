import { createStore, combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import formDataReducer from './formDataReducer';

let reducers = combineReducers({
    form: formReducer,
    formData: formDataReducer 
});

let store = createStore(reducers);

window.store = store;

export default store;