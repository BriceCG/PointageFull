import React from 'react'

const custom = {
  padding: '10px',
  border: '1px solid green',
  bordeRadius: '5px'
}

const Success = (props) => {
  console.log(props)
  return (
    <div style={custom}>
      <span>{props.success}</span>
    </div>
  )
}

export default Success
