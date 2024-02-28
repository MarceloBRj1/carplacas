'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DropdownSide from './dropdown-sidebar';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from 'framer-motion';

const HeaderSection = () => {
    
  return (
    <motion.header
            className={`pb-6 lg:pb-0 fixed top-0 bg-blue-900 w-full z-10`}
        >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 "
      >
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <Image
                className='border-gray-100 rounded-lg bg-white border p-2'
                src={'/carplacasnew.png'}
                width={250}
                height={200}
                alt='carplacas'
              />
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
            <a href="#placas" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 " > Placas </a>

            <a href="#contato" title="" className="text-base font-medium text-white  transition-all duration-200 hover:text-blue-600 focus:text-blue-600 "> Contato </a>

            <a href="#lojas" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Lojas </a>
          </div>
          <DropdownSide />
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default HeaderSection;
