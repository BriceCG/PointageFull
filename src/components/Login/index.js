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
      <div className="alert alert-danger" style={{width: '100%'}}>
      {props.error.message}
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
    <Button disabled={true} value='login' />


    return (
        
    <div className="container-fluid">
    <div className="container-login">
      <div className="item1">
    
      </div>
      <div className="item2">
      
          <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
          <Message  error={userLogin.errorMsg} />
              <div className="form-group">
                <label className="control-label col-sm-12" for="username">Username:</label>
                <div className="col-sm-12">
                  <input type="text"  onChange={this.handleChange}  className="form-control"  placeholder="username" id="user_username" value={user_username}  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-12" for="pwd">Password:</label>
                <div className="col-sm-12">
                  <input type="password" className="form-control" onChange={this.handleChange} placeholder="password" id="user_password" value={user_password} />
                </div>
              </div>
              <div className="form-group">
                <div className=" col-sm-12">
                  {/* <button type="submit" 
                ">SIGN UP</button> */}
                  { userLogin.loading ? 'loading ...' : showBtn}
                </div>
              </div>
              <div className="checkbox" style={{marginLeft: '15px'}}>
                <label><input type="checkbox" value=""/>Se souvenir de moi</label>
                
              </div>
              <div style={{marginLeft: '15px'}}>
                <a href="#">Mot de passe oublié</a>
              </div>
            </form>
      </div>
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




