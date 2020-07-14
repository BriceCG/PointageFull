import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { makeUserUpdate } from '../../../redux'
// import ButtonSubmit from '../../SousComponents/ButtonSubmit';
import Message from '../../Message/Main';
import Button from '../../SousComponents/Button';


const UpdateUser = (props) => {
  const dispatch = useDispatch()
  const message = useSelector( state=>state.user)
  const uniqUser = useSelector(state => state.uniqUser)
  const idUserUpdate = useSelector(state => state.userUpdate.idUserUpdate)
  const userUpdate = useSelector(state => state.userUpdate)

  // destructuring uniq user
  const { user_username,user_role,user_etat } = uniqUser.user
  // initialize data by uniq user 
  let data={
    user_username: user_username ,
    user_role: user_role,
    user_etat: user_etat,
    user_password: '' 
  }
  const [user, setUser] = useState(data)
  const handleChange= e=>{
    setUser({...user,[e.target.id]:e.target.value})
  }

  useEffect(()=>{
    // reinitialise if data change
   data={
      user_username: user_username ,
      user_role: user_role ,
      user_etat: user_etat,
      user_password: ''  
    }
    setUser(data)

  },[uniqUser])


  const handleSubmit = (e)=>{
    const prov={
      user_username: '' ,
      user_role: '' ,
      user_etat:'',
      user_password: ''  
    }
    e.preventDefault();
    dispatch(makeUserUpdate(idUserUpdate,user))
    setUser(prov)
  }




  const user_N = user.user_username
  const user_P = user.user_password
  const user_R = user.user_role
  const user_E = user.user_etat
 
  const showBtn = user_N=='' || user_P=='' || user_R=='' ||user_E=='' ? (<Button value={'create user'} disabled={true} />) : (<Button type="submit" value={'create user'} />)
  
  // get error and success message
  const { successUpdateMsg,errorUpdateMsg }  = userUpdate
  console.log(successUpdateMsg,errorUpdateMsg)


  return (
    <div style={custom.divMain} >
      <div style={custom.divChild}>
        <h3>UpdateUser</h3>
        <hr />
      
      <div>
      
          <form onSubmit={handleSubmit}>
          <Message error={errorUpdateMsg} success={successUpdateMsg} />
          <Button value="X:close modal" action={props.closeModal} />
            <div>
              <input type="text" onChange={(e)=>handleChange(e)} placeholder="username" value={user.user_username||''} id="user_username"  />
            </div>
            
            <div>
              <input type="password" value={user.user_password||''} onChange={(e)=>handleChange(e)} placeholder="password" id="user_password" />
            </div>
            <div>
              <input type="text" value={user.user_role||''} onChange={(e)=>handleChange(e)} placeholder="role" id="user_role" />
            </div>
            <div>
              <input type="text" value={user.user_etat||''} onChange={(e)=>handleChange(e)} placeholder="etat" id="user_etat" />
            </div>
           

            {showBtn}


          </form>
        </div>
        </div>
    </div>
  )
}

const custom = {
  divMain: {
    width: '100%',
    height: '100%',
    // background: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divChild: {
    width: '300px',
    background: 'pink',
    padding: '20px'
  
    
  }
}
export default UpdateUser
