import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const MainSection = () => {
  return (
  <div>
  <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-transparent shadow-lg ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image 
        src='/emplacamento1.png'
        width={500}
        height={500}
        alt='rapaz emplacando'
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl text-center">Venha emplacar conosco</h2>

        <p className="mt-4 text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit voluptate veritatis, provident rem nihil fugit corporis ab porro recusandae. Non consectetur quos iusto reprehenderit deserunt dignissimos, soluta, architecto accusantium repellat numquam impedit nisi libero, quo quaerat amet sequi voluptate atque.
        </p>

        <Button className='flex mx-auto mt-20 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700"'>Entre em contato conosco</Button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default MainSection