import {combineReducers} from 'redux';
import{rootReducer} from './rootReducers';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  ui:rootReducer,
  form : formReducer
});

export default reducers;