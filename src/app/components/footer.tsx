import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (   
    <footer className="bg-gray-50 z-50 ">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start">
          <a href="#" title="">
          <Image
            className='lg:mb-4 mt-6'
            src={'/carplacasmarcelo1.png'}
            width={200}
            height={200}
            alt='carplacas'
          />
          </a>     
        </div>

        <p className=" text-center text-sm text-gray-500 lg:mt-0 lg:text-right font-bold">
          CAR PLACAS &copy; 2024. Todos direitos Reservados.
        </p>
        <a target='_blank' href="
        https://www.instagram.com/gruposhautomotivo?igsh=MXJ0dTFtc2c0dmp2YQ==">
        <Image 
          className=' hidden lg:flex md:flex'
          src={'/gruposh.png'}
          width={130}
          height={130}
          alt='grupo sh' 
            />
        </a>
      </div>
  </div>
</footer>
  )
}

export default Footer