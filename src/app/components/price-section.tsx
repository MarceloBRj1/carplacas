'use client'
import React, { useEffect } from 'react'
import Image  from 'next/image'
import CardPrice from './cardprice'
import { motion } from 'framer-motion'


const PriceSection = () => {
  const animProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  }
  return (
    <motion.div id='placas' 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    transition={{ duration: 0.5 }}

    className='flex justify-center bg-blue-900 text-center rounded'>
    <div className=" items-center bg-blue-900">
        <h2 className="text-2xl font-semibold tracking-tight text-orange-400 mt-10 underline">Conheça nossos Produtos</h2>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        

        className="-mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
      </motion.div>
    </div>
  </div>
    </motion.div>
    
  )
}

export default PriceSection