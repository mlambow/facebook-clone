import React from 'react'

function HeaderIcon({ Icon }) {
  return (
    <div className='cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl active:border-blue-600 active:bodrer-b-2 group'>
        <Icon className='h-5 text-gray-500 group-hover:text-blue-600 text-center sm:h-7 mx-auto'/>
    </div>
  )
}

export default HeaderIcon