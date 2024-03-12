'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DropdownSide from './dropdown-sidebar';
import { motion } from 'framer-motion';

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    
  return (
    <motion.header className='pb-6 lg:pb-0 fixed top-0 bg-blue-900 sm:w-screen w-full z-10 sm:'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{scale: 1.1}}
            href="#" title="" className="flex">
              <Image
                className='border-gray-100 rounded-lg lg:mb-6 bg-white border p-2 mt-6'
                src={'/carplacasnew.png'}
                width={250}
                height={200}
                alt='carplacas'
              />
            </motion.a>
          </div>

          <div className={`${isOpen ? 'flex-col absolute right-2 mt-48 lg:hidden flex-wrap bg-orange-500 bg-opacity-90 rounded-lg' : 'hidden'} items-center`}>
              <a href="#placas" className="block px-2 py-1 text-base font-medium text-white rounded-lg hover:bg-orange-500">Placas</a>
              <a href="#contato" className="block px-2 py-2 text-base font-medium text-white rounded-lg hover:bg-orange-500">Contato</a>
              <a href="#lojas" className="block px-2 py-2 text-base font-medium text-white rounded-lg hover:bg-orange-500">Lojas</a>
          </div>

          <motion.button
            type="button"
            className=" mt-4 inline-flex p-2 text-white rounded-md lg:hidden focus:bg-orange-500 hover:bg-orange-500"
            onClick={toggleMenu}  
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            {isOpen ? (
              
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M3.707 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414L11.414 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </motion.button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10 font-mono">
            <a href="#placas" className="text-base font-medium text-white transition-all duration-200 hover:text-orange-500 focus:text-orange-500">PLACAS</a>
            <a href="#contato" className="text-base font-medium text-white transition-all duration-200 hover:text-orange-500 focus:text-orange-500">CONTATO</a>
            <a href="#lojas" className="text-base font-medium text-white transition-all duration-200 hover:text-orange-500 focus:text-orange-500">LOJAS</a>
          </div>
          <DropdownSide />
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default HeaderSection;
