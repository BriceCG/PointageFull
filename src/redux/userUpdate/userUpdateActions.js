import {
  MAKE_USER_UPDATE_FAILURE,
  MAKE_USER_UPDATE_REQUEST,
  MAKE_USER_UPDATE_SUCCESS,
  GET_USER_ID_UPADTE
} from './userUpdateTypes'
import axios from 'axios'
import { fetchUser } from '../../redux'


// make request
export const makeUserUpdateRequest = ()=>{
  return{
    type: MAKE_USER_UPDATE_REQUEST
  }
}

// update succeful 
export const makeUserUpdateSuccess = (successMsg)=>{
  return{
    type: MAKE_USER_UPDATE_SUCCESS,
    payload: successMsg
  }
}

// request faild
export const makeUserUpdateFailure = (errorMsg)=>{
  return{
    type: MAKE_USER_UPDATE_FAILURE,
    payload: errorMsg
  }
}

// fire update

export const makeUserUpdate = (id,data)=>{
  return (dispatch)=>{
    dispatch(makeUserUpdateRequest())
    axios.put('http://localhost:4000/user/'+id,data)
    .then(response=>{
      const successMsg = response.data
      dispatch(makeUserUpdateSuccess(successMsg))
      dispatch(fetchUser())

    })
    .catch(error=>{
      const errorMsg = error.response.data
      dispatch(makeUserUpdateFailure(errorMsg))
    })

  }
}

// get id USER
export const getIdUserUpdate = (id)=>{
return{
  type: GET_USER_ID_UPADTE,
  payload: id
}

}