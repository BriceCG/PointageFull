import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../assets/img/logo.png'
import axios from 'axios'

const Header = ({redirect}) => {
  const [userLogged, setUserLogged] = useState('')
  useEffect(() => {
    const sessionUser = window.localStorage.getItem('userLogged')
    if(sessionUser){
      setUserLogged(sessionUser)
    }
  }, [])


  // Log out user
  const logOut = ()=>{
    // remove token
    window.localStorage.removeItem('token')
    // remove username
    window.localStorage.removeItem('userLogged')
    redirect.history.push('/')
  }



  const getOneUser  = ()=>{
    axios.get('http://localhost:4000/user/1')
    .then(response=>console.log(response))
    .catch(error=>console.log(error.response.data.message))
  }





  return (
    // <header style={custom.header}>
  
    //     
    //       <div>
    //         presence
    //       </div>
    //     </Link>
    //     <Link to="/dashboard">
    //       <div>create</div>
    //     </Link>
    //     <div>
    //       <button onClick={logOut}>Log out {userLogged} </button>
    //     </div>
     
    // </header>
    <header style={{display:'flex',padding: '10px 10px ',justifyContent:'space-between'}}>
      <Link to="/profile" style={{color: "white",textDecoration: 'none'}} className="headerLink">
      <div className="username headerLink" >
        LAINGONIAINA Rheada
      </div>
      </Link>
      <Link to="/our-logo" className="headerLink">
      <div className="ourLogo headerLink">
        <img src={ logo } className="ourLogo"/>
      </div>
      </Link>
      <Link to="/entreprise-logo" className="headerLink">
      <div className="entrepriseLog headerLink" >
        <img src={ logo } className="ourLogo"/>
      </div>
      </Link>
    </header>
    
  )
}



export default Header


{/* <header>
       
       <div>
         <h1>Dashboard</h1>
       </div>
     <div>
       
       
     </div>
   </header>
   <header style={{margin:'20px'}}>
     <div>
       <b>{userLogged}</b>
     </div>
   </header> */}