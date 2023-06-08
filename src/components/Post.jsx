import React from 'react'
import { ChatBubbleLeftIcon, ShareIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'

function Post({ name, src, message, email, postImage, image, timestamp }) {
  return (
    <div className='flex flex-col'>
        <div className='p-5 bg-white mt--5 rounded-t-2xl shadow-sm'>
            <div className='flex items-center space-x-2'>
                <img 
                    src={image} 
                    width={40} 
                    height={40}
                    className='rounded-full'
                />

                <div>
                    <p className='font-medium'>{name}</p>
                    {/* <p>
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p> */}
                </div>
            </div>

            <p className='pt-4'>
                {message}
            </p>
        </div>
        {postImage && (
            <div className='relative h-56 md:h-96 bg-white'>
                <img 
                    src={postImage} 
                    loading='lazy'
                />
            </div>
        )}

        <div className='flex justify-center items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
            <div className='inputIcon rounded-bl-2xl'>
                <HandThumbUpIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>
            </div>

            <div className='inputIcon'>
                <ChatBubbleLeftIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Comment</p>
            </div>

            <div className='inputIcon rounded-bl-2xl'>
                <ShareIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post