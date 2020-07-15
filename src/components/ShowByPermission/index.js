import React from 'react'
import { roleCan } from '../../helpers/role'

const ShowByPermission = ({can,children}) => {

  // test  if the is match in the list of user have the permission

if(can && roleCan.includes(can.toLowerCase()))
  return children
else
  return null

}

export default ShowByPermission
