import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from './userTypes';

const initialState = {
  loading: true,
  users: [],
  error: '',
  successMsgCreate: '',
  failureMsgCreate: ''
}


export const userReducer = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_USER_REQUEST: 
      return{
        ...state,
        loading: true
      }
    
    case FETCH_USER_SUCCESS: 
      return{
        ...state,
        loading: false,
        users: action.payload
      }
    
    case FETCH_USER_FAILURE: 
      return{
        ...state,
        loading:false,
        error: action.payload
      }
    
      // CREATE USER

    case CREATE_USER_REQUEST: 
      return{
        ...state
      }

    case CREATE_USER_SUCCESS:
      return{
        ...state,
        successMsgCreate: action.payload,
        failureMsgCreate: ''
      }

    case CREATE_USER_FAILURE:
      return{
        ...state,
        failureMsgCreate: action.payload,
        successMsgCreate: ''
      }
    default: 
      return state;
  }
}