import {
  GET_UNIQ_USER_FAILURE,
  GET_UNIQ_USER_REQUEST,
  GET_UNIQ_USER_SUCCESS
} from './uniqUserTypes'
import axios from 'axios'


// make request to api
export const getUniqUserRequest = ()=>{
  return{
    type: GET_UNIQ_USER_REQUEST
  }
}


// response get succefull
export const getUniqUserSuccess = (user)=>{
  return{
    type: GET_UNIQ_USER_SUCCESS,
    payload: user
  }
}


// request have error
export const getUniqUserFailure = (errorMsg)=>{
  return{
    type: GET_UNIQ_USER_FAILURE,
    payload: errorMsg
  }
}

// fire the requst 

export const getUniqUser = (id)=>{
  return (dispatch)=>{
    dispatch(getUniqUserRequest)
    axios.get('http://localhost:4000/user/'+id)
    .then(response=>{
      const user = response.data.existingUser
      dispatch(getUniqUserSuccess(user))
      console.log(response)
    })
    .catch(error=>{
      const errorMsg = error.response.data.message
      dispatch(getUniqUserFailure(errorMsg))
      console.log(error)

    })
  }
}
