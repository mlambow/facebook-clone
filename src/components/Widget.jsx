import { EllipsisHorizontalIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Contact from './Contact'

const contacts = [
    { id: 1, src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz'},
    { id: 2, src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz'},
    { id: 3, src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz'},
    { id: 4, src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz'},
    { id: 5, src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz'},
    { id: 6, src: 'https://links.papareact.com/5me', name: 'Jeff Bezoz'}
]

function Widget() {
  return (
    <div className='hidden xl:flex flex-col w-56 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-6'/>
                <EllipsisHorizontalIcon className='h-6' />
            </div>
        </div>

        {contacts.map((contact) => {
            <Contact key={contact.id} src={contact.src} name={contact.name} />
        })}
    </div>
  )
}

export default Widget