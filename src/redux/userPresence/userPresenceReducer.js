import {
  FETCH_PRESENCE_FAILURE,
  FETCH_PRESENCE_REQUEST,
  FETCH_PRESENCE_SUCCESS
} from './userPresenceTypes'

const initialState = {
  loading: false,
  presenceList: [],
  errorMsg: ''
}

export const userPresenceReducer = (state=initialState, action)=>{
  switch(action.type){
    case FETCH_PRESENCE_REQUEST: 
      return{
        ...state,
        loading: true
      }
    case FETCH_PRESENCE_SUCCESS: 
      return{
        ...state,
        loading: false,
        presenceList: action.payload
      }
    case FETCH_PRESENCE_FAILURE: 
      return{
        ...state,
        loading:false,
        errorMsg: action.payload
      }
    default:
      return state
  }
}