import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from './userTypes';

import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS
} from './userTypes';

import {axiosBase} from '../../helpers/axiosBase'

export const fetchUserRequest = ()=>{
  return{
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = (user)=>{
  return{
    type: FETCH_USER_SUCCESS,
    payload: user
  }
}

export const fetchUserFailure = (error)=>{
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}

export const fetchUser = ()=>{
  return (dispatch)=>{
    dispatch(fetchUserRequest)
    axiosBase.get('/users')
    .then(response=>{
      const users = response.data;
      dispatch(fetchUserSuccess(users))
    })
    .catch( error=>{
      const errorMsg = error.message;
      dispatch(fetchUserFailure(errorMsg))
    })
  }
}

// FETCH USER FROM API

// CREATE USER FROM API


export const createUserRequest = ()=>{
  return{
    type: CREATE_USER_REQUEST,
  }
}

export const createUserSuccess = successMsg=>{
  return{
    type: CREATE_USER_SUCCESS,
    payload: successMsg
  }
}

export const createUserFailure = errorMsg=>{
  return{
    type: CREATE_USER_FAILURE,
    payload: errorMsg
  }
}

export const createUser = (user)=>{
  return (dispatch)=>{
    dispatch(createUserRequest)
    axiosBase.post('/user',user)
      .then( success=>{
        const successMsg = success.data
        dispatch(createUserSuccess(successMsg))
        // re fetch user from database if user is created
        dispatch(fetchUser())
      })
      .catch(error=>{
        const errorMsg = error.response.data;
        console.log(errorMsg)
        dispatch(createUserFailure(errorMsg))
      })
  }
}