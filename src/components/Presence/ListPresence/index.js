import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchPresence  } from '../../../redux'


const BodyTable = (props)=>{
  return(
    <table>
        <thead>
          <tr>
          <th>#</th>
          <th>presence date</th>
          <th>presence type</th>
          <th>departement presence</th>
          <th>user id presence</th>
          </tr>
        </thead>
        <tbody>
        {props.show}
        </tbody>
      </table>
  )
}



const ListPresence = () => {
  const listPresence = useSelector((state)=>state.userPresence)

  // console.log(listPresence.presenceList)
 
  const show = listPresence.loading && listPresence.presenceList.length == 0 ? null : (listPresence.presenceList.map(val=>(
    <tr key={val.id}>
      <td>{val.id}</td>
      <td>{val.presence_date}</td>
      <td>{val.presence_type}</td>
      <td>{val.pt_departement_departement_id_presence}</td>
      <td>{val.pt_user_user_id_presence}</td>
  </tr>
  )))
 


  return (
    <div>
      
      {show ? <BodyTable show={show} /> : 'en cours'}
    </div>
  )
}

export default ListPresence
