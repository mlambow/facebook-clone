import React from 'react'

function Contact({ src, name }) {
  return (
    <div>
        <img 
            className='rounded-full h-[50px] w-[50px] object-cover'
            src={src}
        />
        <p>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce'></div>
    </div>
  )
}

export default Contact