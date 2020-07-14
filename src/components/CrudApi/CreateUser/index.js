import React,{useState} from 'react'
import { createUser } from '../../../redux'
import { useDispatch,useSelector } from 'react-redux'
// import ButtonSubmit from '../../SousComponents/ButtonSubmit';
import Message from '../../Message/Main';
import Button from '../../SousComponents/Button';

const CreateUser = () => {
  const dispatch = useDispatch()
  const message = useSelector( state=>state.user)
  const data={
    user_username: '',
    user_password: '',
    user_role: '',
    user_etat: ''
  }
  const [user, setUser] = useState(data)
  

  const handleChange= e=>{
    setUser({...user,[e.target.id]:e.target.value})
  }

  
  const handleSubmit = e=>{
   
    e.preventDefault();
    dispatch(createUser(user))
    setUser(data)
    console.log(message)
  }

  



  const { user_username,user_password,user_role,user_etat } = user
  const showBtn = user_username=='' || user_password=='' || user_role=='' ||user_etat==''? (<Button value={'create user'} disabled={true} />) : (<Button type="submit" value={'create user'} />)
  const { successMsgCreate,failureMsgCreate }  = message

  
  return (
    <div>
      <Message error={failureMsgCreate} success={successMsgCreate} />
      <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" onChange={(e)=>handleChange(e)} placeholder="username" value={user_username} id="user_username"  />
            </div>
            <div>
              <input type="password" value={user_password} onChange={(e)=>handleChange(e)} placeholder="password" id="user_password" />
            </div>
            <div>
              <input type="text" value={user_role} onChange={(e)=>handleChange(e)} placeholder="role" id="user_role" />
            </div>
            <div>
              <input type="text" value={user_etat} onChange={(e)=>handleChange(e)} placeholder="etat" id="user_etat" />
            </div>

            {showBtn}
            {/* <ButtonSubmit value={'create user'} /> */}
          </form>
        </div>
    </div>
  )
}


const mapDispatchToProps = dispatch=>{
  return{
    createUser: (user)=>dispatch(createUser(user))
  }
}



export default CreateUser
