import {
  FIRE_LOGIN_FAILURE,
  FIRE_LOGIN_REQUEST,
  FIRE_LOGIN_SUCCESS
} from './userLoginTypes';
import { axiosBase  } from '../../helpers/axiosBase'

// do  request to the api
export const fireLoginRequest = ()=>{
  return{
    type: FIRE_LOGIN_REQUEST
  }
}

// request & login succeffuly
export const fireLoginSuccess = (successMsg)=>{
  return{
    type: FIRE_LOGIN_SUCCESS,
    payload: successMsg
  }
}

// request or login have error

export const fireLoginFailure = (errorMsg)=>{
  return{
    type: FIRE_LOGIN_FAILURE,
    payload: errorMsg
  }
}

// fire the request login

export const fireLogin = (dataWithProps)=>{
  return (dispatch)=>{
    console.log("request")
    dispatch(fireLoginRequest());
    console.log(" end request")
    axiosBase.post('/login',dataWithProps.user)
    .then( success=>{
      console.log("success")
      const token = success.data.token
      dispatch(fireLoginSuccess(success))
      
      const userLogged = success.data.user_username
      // save token allow as user session
      window.localStorage.setItem('token',token)
      // save user logged name
      window.localStorage.setItem('userLogged',userLogged)
      dataWithProps.props.history.push('/dashboard')
      // console.log('login succefully')
    })
    .catch(error=>{
     console.log(error)
    dispatch(fireLoginFailure(error.response.data))
    })
  }
}