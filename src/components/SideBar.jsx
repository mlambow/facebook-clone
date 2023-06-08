import React from 'react'
import SideBarRow from './SideBarRow'
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, ClockIcon, ComputerDesktopIcon, UsersIcon } from '@heroicons/react/24/solid'

function SideBar() {
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SideBarRow />
        <SideBarRow Icon={UsersIcon} title='Friends'/>
        <SideBarRow Icon={UserGroupIcon} title='Groups'/>
        <SideBarRow Icon={ShoppingBagIcon} title='MarketPlace'/>
        <SideBarRow Icon={ComputerDesktopIcon} title='Watch'/>
        <SideBarRow Icon={CalendarDaysIcon} title='Events'/>
        <SideBarRow Icon={ClockIcon} title='Memories'/>
        <SideBarRow Icon={ChevronDownIcon} title='More'/>
    </div>
  )
}

export default SideBar