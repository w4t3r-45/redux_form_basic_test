import {constants} from '../actions/constants';

const INIT_STATE = {
    "isAuth" : false,
    "test" : false
}


export const rootReducer = (state = INIT_STATE , action ) =>{
  switch(action.type) {
    case constants.TEST :
        return {
          ...state , test: true
        }
    default : 
        return state;
  }
}

