import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        id: 1,
        name: 'Swazi Mlambo',
        src: 'https://links.papareact.com/zof',
        profile: 'https://links.papareact.com/5me'
    },
    {
        id: 2,
        name: 'Wandile Mlambo',
        src: 'https://links.papareact.com/zof',
        profile: 'https://links.papareact.com/5me'
    },
    {
        id: 3,
        name: 'Thabiso Ngubane',
        src: 'https://links.papareact.com/zof',
        profile: 'https://links.papareact.com/5me'
    },
    {
        id: 4,
        name: 'Mthobisi Dlamini',
        src: 'https://links.papareact.com/zof',
        profile: 'https://links.papareact.com/5me'
    },
    {
        id: 5,
        name: 'Sphiwe Mkhize',
        src: 'https://links.papareact.com/zof',
        profile: 'https://links.papareact.com/5me'
    },
]


function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map((story) => (
            <StoryCard key={story.id} name={story.name} src={story.src} profile={story.profile}/>
        ))}
    </div>
  )
}

export default Stories