import React from 'react'
import Success from '../Success';
import Error from '../Error';


const Message = (props) => {
  const {success,error} = props
  console.log('main',success)
 if(success.message)
    return <Success success={props.success.message} />  
  else if(error.message)
    return <Error error={error.message} />
  return null
}

export default Message
