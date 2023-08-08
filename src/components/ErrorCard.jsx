import React from 'react';
import Err from '../assets/error.png'

function ErrorCard() {
  return (
    <div className='flex justify-center items-center'>
        <img src={Err} alt="Error" />
    </div>
  )
}

export default ErrorCard