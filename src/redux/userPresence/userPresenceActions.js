import {
  FETCH_PRESENCE_FAILURE,
  FETCH_PRESENCE_REQUEST,
  FETCH_PRESENCE_SUCCESS
} from './userPresenceTypes'
import axios from 'axios';

export const fetchPresenceRequest = ()=>{
  return{
    type: FETCH_PRESENCE_REQUEST,
  }
}

export const fetchPresenceSuccess = presenceList =>{
  return{
    type: FETCH_PRESENCE_SUCCESS,
    payload: presenceList
  }
}


export const fetchPresenceFailure = errorMsg=>{
  return{
    type: FETCH_PRESENCE_FAILURE,
    payload: errorMsg
  }
}

export const fetchPresence = ()=>{
  return (dispatch)=>{
    dispatch(fetchPresenceRequest())
    const token = window.localStorage.getItem('token')
    axios({
      method: 'GET',
      url: 'http://localhost:4000/presences',
      headers:{
        'x-api-key': token 
      }
    })
    .then(response=>{
      const presenceList = response.data.presences;
      dispatch(fetchPresenceSuccess(presenceList))
      // console.log(response)
    })
    .catch(error=>{
      dispatch(fetchPresenceFailure(error))
      console.log(error)
    })
  }
}