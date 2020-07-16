import {
  MAKE_USER_UPDATE_FAILURE,
  MAKE_USER_UPDATE_REQUEST,
  MAKE_USER_UPDATE_SUCCESS,
  GET_USER_ID_UPADTE,
  REMOVE_MESSAGE
} from './userUpdateTypes'

const initialState = {
  loading: false,
  successUpdateMsg: '',
  errorUpdateMsg: '',
  idUserUpdate: ''
}

 export const userUpdateReducer = (state=initialState,action)=>{
  switch(action.type){
    case MAKE_USER_UPDATE_REQUEST: 
      return{
        ...state,
        loading: true
      }
    case MAKE_USER_UPDATE_SUCCESS:
      return{
        ...state,
        loading: false,
        successUpdateMsg: action.payload,
        errorUpdateMsg: ''
      }
    case MAKE_USER_UPDATE_FAILURE:
      return{
        ...state,
        loading: false,
        successUpdateMsg: '',
        errorUpdateMsg:  action.payload
      }

    case GET_USER_ID_UPADTE: 
      return{
        ...state,
        idUserUpdate: action.payload
      }
    case REMOVE_MESSAGE: 
      return{
        ...state,
        successUpdateMsg: '',
        errorUpdateMsg: ''
      }
    default: 
      return state
    
  }
}