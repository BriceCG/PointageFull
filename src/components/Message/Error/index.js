import React from 'react'


const custom = {
  padding: '10px',
  border: '1px solid red',
  bordeRadius: '5px'
}
const Error = (props) => {
  return (
    <div style={custom}>
      <span>{props.error}</span>
    </div>
  )
}

export default Error
