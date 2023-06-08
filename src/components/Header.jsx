import React from 'react'
import { MagnifyingGlassIcon, FlagIcon, PlayIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { HomeIcon, BellIcon, ChatBubbleLeftRightIcon, ChevronDownIcon,UserGroupIcon, ViewColumnsIcon } from '@heroicons/react/24/solid'
import HeaderIcon from './HeaderIcon'

function Header() {
  return (
    <div className='flex sticky top-0 z-20 bg-white items-center p-2 lg:px-5 shadow-md'>
        <div className='flex items-center m-2'>
            <img 
                className='h-[50px] w-[50px]'
                src='https://links.papareact.com/5me'
                alt='facebook-logo'
            />

            <div className='flex items-center ml-2 rounded-full bg-gray-100 p-2 opacity-0 lg:opacity-100'>
                <MagnifyingGlassIcon className='h-6 text-gray-600 hidden md:inline-flex flex-shrink' />
                <input
                    className='bg-transparent outline-none ml-2 items-center  flex-shrink md:inline-flex'
                    type='text'
                    placeholder='Search Facebook'
                />
            </div>
        </div>
            
        <div className='flex justify-center flex-grow sm:-ml-60 lg:ml-1 -ml-60'>
            <div className='flex max-md:space-x-4 space-x-6 md:space-x-2'>
                <HeaderIcon Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
            </div>
        </div>

        <div className='flex items-center sm:space-x-2 justify-end'>
            <img src='https://links.papareact.com/5me' alt='profile-picture' className='rounded-full w-11 h-11' />
            <p className='font-semibold whitespace-wrap pr-3'>Wandile Mlambo</p>
            <ViewColumnsIcon className='icon'/>
            <BellIcon className='icon'/>
            <ChatBubbleLeftRightIcon className='icon'/>
            <ChevronDownIcon className='icon'/>
        </div>
    </div>
  )
}

export default Header