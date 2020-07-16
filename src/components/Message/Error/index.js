import React from 'react'


const custom = {
  padding: '10px',
  border: '1px solid red',
  bordeRadius: '5px'
}
const Error = (props) => {
  return (
    <div className="alert alert-danger">
       {props.success}
    </div>
  )
}

export default Error
