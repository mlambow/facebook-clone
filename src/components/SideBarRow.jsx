import React from 'react'

function SideBarRow({ Icon, title, src }) {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
        {src && (
            <img 
                className='rounded-full w-11 h-11'
                src={src}
            />
        )}

        {Icon && (
            <Icon className='h-8 w-8 text-blue-600'/>
        )}
        <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SideBarRow