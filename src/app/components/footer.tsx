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
    <div className='bg-blue-950 h-[60px] sm:text-sm text-center text-white text-lg justify-between lg:mt-0 font-bold'>
      <div className='h-[50px] text-center sm:text-sm text-white text-lg flex justify-between items-center mx-4 sm:mx-auto lg:mx-10 lg:mt-0 lg:font-bold'>
        <p className="w-3/4 sm:w-auto ml-12 lg:ml-0 mt-3">
          CAR PLACAS &copy; 2024. Todos direitos Reservados.
        </p>
        <span className='hidden lg:block mt-3'>CNPJ: 52.920.962.0001-62</span>
      </div>
    </div>
</footer>
  )
}

export default Footer