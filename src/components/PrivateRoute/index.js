import React from 'react'
import { Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component,...rest}) => {
  const token = window.localStorage.getItem('token')
  const Component = component
  return token ? (
     //  {...rest} : destructuring props rest
    <Route {...rest} component={ Component } />
  ):( <Redirect to={{pathname: '/'}}  />)
}

export default PrivateRoute
