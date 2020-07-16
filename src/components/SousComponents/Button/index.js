import React from 'react'
import PropTypes from 'prop-types'


// button with props type,disabled,value and function onclick without parameter
const Button = (props) => {
  const { type,disabled,value,action } = props
  return (
    <button style={{background: '#4e4779',color: 'white'}} className="btn btn-block submitLogin" type={type} disabled={disabled} onClick={action}>
      {value}
    </button>
  )
}


Button.defaultProps = {
  type: 'button',
  disabled: false,
  value: 'button',
  action: ()=>{}
}

export default Button
