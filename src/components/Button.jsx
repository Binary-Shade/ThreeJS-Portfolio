import React from 'react'

const Button = ({name, isBeam = true, containerClass}) => {
  return (
    <button className={`btn ${containerClass}`}>
        {
            isBeam && (
                <span className='relative flex h-3 w-3'>
                    <span className='btn-ping'/>
                    <span className='btn-ping_dot'/>
                </span>
            )
        }
        <p className='font-semibold'>{name}</p>
    </button>
  )
}

export default Button
