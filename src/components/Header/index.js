import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
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
    <header style={custom.header}>
  
        <Link to="/dashboard/presence">
          <div>
            presence
          </div>
        </Link>
        <Link to="/dashboard">
          <div>create</div>
        </Link>
        <div>
          <button onClick={logOut}>Log out {userLogged} </button>
        </div>
     
    </header>
  )
}

const custom=  {
  header: {
    display:'flex',
    background: 'skyblue',
    border: '2px solid black',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    padding: '10px'

  },
 
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