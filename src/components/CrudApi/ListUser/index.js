import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUser,getUniqUser,getIdUserUpdate,removeMessage,getRole } from '../../../redux'
import axios from 'axios';
import Button from '../../SousComponents/Button';
import ShowByPermission from '../../ShowByPermission';


// table user
const TableBody = props=>{
  return(
    <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Password</th>
          <th>Role</th>
          <ShowByPermission can={props.role}>
            <th>Update</th>
          </ShowByPermission>
         
        </tr>
        </thead>

       <tbody>
          {/* show list user */}
        { props.showUserList }
       </tbody>

      </table>
  )
}


const ListUser = (props) => {
  const { users,loading,openModal } = props
  const user = useSelector(state => state.user)
  const [role, setRole] = useState('')
  const dispatch = useDispatch()
  const [userList, setUserList] = useState([])

  useEffect( ()=>{
    dispatch(fetchUser())
    const token = window.localStorage.getItem('token')
    axios({
      method: 'GET',
      url: 'http://localhost:4000/me',
      headers:{
        'x-api-key': token 
      }
    })
    .then( response=>{
      setRole(response.data.user.user_role.toLocaleLowerCase()) 
      
    })
    .catch(error=>{
      console.log(error) 
    })
    
  },[role])

  const getUser = (id)=>{
    dispatch(getUniqUser(id))
    dispatch(getIdUserUpdate(id))
    dispatch(removeMessage())
    openModal()
  }


  const test = ()=>{
    const data={
      user_username: 'moffdsfsdfdfdsfsdsdfsddfsmota',
      user_role: 'blabla',
      user_etat: 'blabla',
      user_password: 'dfsdsf'
    }
    axios.put('http://localhost:4000/user/39',data)
    .then(succ=>{
      dispatch(fetchUser())
    })
    .catch(err=>console.log(err.response.data.message))
  }

  // si loading true et tableau user vide retourne null
  
  const showUserList =  user.loading && user.users.length == 0  ? null : (user.users.users.map(user=>(
    <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.user_username}</td>
        <td>{user.user_password}</td>
        <td>{user.user_role}</td>
        
        <td>
          {/* <Button value="update" action={()=>getUser(user.id)} /> */}
          <ShowByPermission can={role}>
            <Button value="update" action={()=>getUser(user.id)} />
          </ShowByPermission>
        </td>
        
      </tr>
  )))





  return (
    <div>
       <h2>List of User</h2>
      {showUserList ? <TableBody role={role} showUserList={showUserList} openModal={openModal} /> : <h3>Loading ....</h3>}
     
    </div>
  )
}

export default ListUser
