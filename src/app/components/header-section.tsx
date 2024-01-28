import React from 'react'
import Image from 'next/image'
import DropdownSide from './dropdown-sidebar'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

const HeaderSection = () => {
  return (
    <header className="pb-6 bg-blue-950 lg:pb-0">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <h1 className='text-white text-4xl border p-2'> CE PLACAS</h1>
                </a>
            </div>
            

            <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">

                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Placas </a>

                <a href="#" title="" className="text-base font-medium  transition-all duration-200 hover:text-blue-600 focus:text-blue-600 text-white"> Contato </a>

                <a href="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Lojas </a>        
            </div>
            <DropdownSide  />
        </nav>
    </div>
</header>
  )
}

export default HeaderSection