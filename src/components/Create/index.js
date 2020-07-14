import React,{useEffect} from 'react'
import axios from 'axios'

const Create = () => {
  
  const getUser = ()=>{
    console.log(axios.get('http://localhost:4000/users'))
    const user = {
      user_username: 'test',
      user_password: '1234',
      user_role: 'df',
      user_etat: 'fsdfs'
    }
    axios.post('http://localhost:4000/user',user)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log('error')
      console.log(err)
    })
  }
  
  return (
    <div>
      <h1>SAVE USER</h1>
      <button onClick={getUser}>
        fire
      </button>
    </div>
  )
}

export default Create
