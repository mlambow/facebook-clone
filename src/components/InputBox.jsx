import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

function InputBox() {
    const [imageToPost, setImageToPost] = useState(null)
    const [input, setInput] = useState('')
    const sendPost = (e) => {
        e.preventDefault()


        
    }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <img 
                className='rounded-full'
                src=''
            />

            <form className='flex flex-1'>
                <input 
                    className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                    type='text'
                    placeholder={`What's on your mind, Wandile?`}
                    onChange={e => setInput(e.target.value)}
                    value={input}
                />
                <button type='submit' onClick={sendPost}>Send Post</button>
            </form>

            {imageToPost && (
                <div className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
                    <img 
                        src=''
                        className='h-10 object-contain'
                    />
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}
        </div>

        <div className='flex justify-evenly items-center p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-600' />
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

            <div className='inputIcon'>
                <CameraIcon className='h-7 text-green-600' />
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

            <div className='inputIcon'>
                <FaceSmileIcon className='h-7 text-yellow-600' />
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>
            
        </div>
    </div>
  )
}

export default InputBox