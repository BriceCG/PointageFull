import {
  GET_UNIQ_USER_FAILURE,
  GET_UNIQ_USER_REQUEST,
  GET_UNIQ_USER_SUCCESS
} from './uniqUserTypes'

const initialState = {
  loading: false,
  user:{},
  errorMsg: ''
}

export const uniqUserReducer = (state=initialState,action)=>{
  switch(action.type){
    case GET_UNIQ_USER_REQUEST: 
      return{
        ...state,
        loading: true
      }
    case GET_UNIQ_USER_SUCCESS: 
      return{
        ...state,
        loading: false,
        user: action.payload,
        errorMsg: ''
      }
    case GET_UNIQ_USER_FAILURE: 
      return{
        ...state,
        loading: false,
        user:{},
        errorMsg: action.payload
      }
    default: 
      return state
  }
}