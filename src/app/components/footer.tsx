import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (   
    <footer className="bg-gray-50 ">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
        <a href="#" title="">
      <Image 
        className='border-gray-100 rounded border p-2'
        src={'/carplacasnew.png'}
        width={230}
        height={200}
        alt='carplacas' 
          />
        </a>     
      </div>

      <p className=" text-center text-sm text-gray-500 lg:mt-0 lg:text-right font-bold">
        CARPLACAS &copy; 2024. Todos direitos Reservados.
      </p>
      <a target='_blank' href="
      https://www.instagram.com/gruposhautomotivo?igsh=MXJ0dTFtc2c0dmp2YQ==">
      <Image 
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