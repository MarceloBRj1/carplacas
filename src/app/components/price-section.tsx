'use client'
import React, { useEffect } from 'react'
import Image  from 'next/image'
import CardPrice from './cardprice'



const PriceSection = () => {

  return (
    <div className='flex justify-center bg-blue-900 text-center ' id='placas'>
    <div className=" items-center bg-blue-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Conheça nossos Produtos</h2>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     <CardPrice
          modelo="Placa para Carro"
          price="280"
          Image={Image}
          imgProps={{
            src: '/placatcerto.png',
            alt: 'fodase',
            width: 1000,
            height: 350,
           }}
           parcela='3x sem juros'
      />
      <CardPrice
          modelo="Placa para Moto"
          price="180"
          Image={Image}
          imgProps={{
            src: '/moto2.png',
            alt: 'fodase',
            width: 1000,
            height: 350,
           }}
           parcela='3x sem juros'
      />
      <CardPrice
          modelo="Suporte para placa"
          price="20"
          Image={Image}
          imgProps={{
            src: '/suporte.png',
            alt: 'fodase',
            width: 1000,
            height: 350,
           }}
      />
      <CardPrice
          modelo="Lacre para Parafuso"
          price="15"
          Image={Image}
          imgProps={{
            src: '/cbm2.png',
            alt: 'fodase',
            width: 1000,
            height: 350,
           }}
      />
      </div>
    </div>
  </div>
    </div>
    
  )
}

export default PriceSection