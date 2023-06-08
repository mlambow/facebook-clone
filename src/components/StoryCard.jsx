import React from 'react'

function StoryCard({ id, src, name, profile }) {
  return (
    <div className='relative h-14 w-20 md:h-20 md:w-30 lg:h-56 lg:w-60 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
        <img 
            className='absolute rounded-full z-50 top-5 left-4 w-12 h-12'
            id={id}
            src={profile}
        />

        <img 
            className='filter opacity-0 lg:opacity-100 brightness-75 rounded-full lg:rounded-3xl lg:w-[250px] md:h-[210px] w-35 h-35'
            src={src}
        />

        <p className='absolute items-center justify-center mx-auto opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
            {name}
        </p>
    </div>
  )
}

export default StoryCard