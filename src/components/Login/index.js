import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fireLogin } from '../../redux';

import Button from '../SousComponents/Button';


const custom = {
  padding: '0px 5px',
  border: '1px solid red',
  color:'red',
  borderRadius: '5px',
  fontWeight: '100'

}
const Message = (props)=>{
  if(props.error){
    return(
      <div style={custom}>
        <h3>{props.error.message}</h3>
      </div>
    )
  }
  return null
}

export class Login extends Component {
  state = {
    user_username: '',
    user_password: '',
    
  }

componentDidMount() {
 
  const token = window.localStorage.getItem('token')
  if(token){
    // console.log('token available')
    this.props.history.push('/dashboard')
  }
}




  handleChange = (e)=>{
    this.setState({...this.state,[e.target.id]: e.target.value})
  }

  handleSubmit = (e)=>{
    e.preventDefault()

    const dataWithProps = {
      user: this.state,
      props: this.props
    }

    this.props.fireLogin(dataWithProps)
    
  }





  render() {
    
    const {user_username,user_password,disabled} = this.state;
    const { userLogin } = this.props
   
    const showBtn = user_username !=='' && user_password !=='' 
    ? 
    <Button type="submit" value='login' />
    :
    <Button disabled={true} />


    return (
      <div>
        
        <h1>Login</h1>
        <hr />
        <div>
          <Message  error={userLogin.errorMsg} />
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" onChange={this.handleChange} placeholder="username" id="user_username"  value={user_username}  />
            </div>
            <div>
              <input type="password" onChange={this.handleChange} placeholder="password" id="user_password" value={user_password} />
            </div>
            
          { userLogin.loading ? 'loading ...' : showBtn}
           
    
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    userLogin: state.userLogin,

  }
}

const mapDispatchToPrps = (dispatch)=>{
  return{
    fireLogin: (user)=>dispatch(fireLogin(user))
  }
}

export default connect(mapStateToProps,mapDispatchToPrps)(Login)
