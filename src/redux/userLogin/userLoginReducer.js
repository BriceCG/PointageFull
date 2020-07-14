import {
  FIRE_LOGIN_FAILURE,
  FIRE_LOGIN_REQUEST,
  FIRE_LOGIN_SUCCESS
} from './userLoginTypes';


const initialState = {
  loading: false,
  successMsg: '',
  errorMsg: ''
}

export const userLoginReducer = (state=initialState, action)=>{
  switch(action.type){
    case FIRE_LOGIN_REQUEST: 
      return{
        ...state,
        loading: true
      }
    case FIRE_LOGIN_SUCCESS: 
      return{
        ...state,
        loading:false,
        successMsg: action.payload,
        errorMsg: ''
      }
    case FIRE_LOGIN_FAILURE:
      return{
        ...state,
        loading: false,
        errorMsg: action.payload,
        successMsg: ''
      }
    default: 
      return state
  }
}