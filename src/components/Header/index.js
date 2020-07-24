import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../assets/img/logo.png'


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






  return (
    <header style={{display:'flex',padding: '10px 10px ',justifyContent:'space-between'}} className="headerHome">
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
      <div className="entrepriseLog headerLink"  >
          <img src={ logo } className="ourLogo" />
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