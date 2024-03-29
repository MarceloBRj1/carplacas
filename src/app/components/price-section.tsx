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

    className=' flex justify-center bg-blue-950 text-center rounded-lg container'>
    <div className="items-center bg-blue-950">
        <h2 className="text-3xl font-semibold tracking-tight text-orange-500 mt-10">Conheça os nossos Produtos</h2>
        <p className='text-white mt-2'>Placas mercosul em até 3x sem juros!</p>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        

        className="grid grid-cols-1 gap-5 justify-center lg:grid lg:grid-cols-4 lg:gap-8">
     <CardPrice
          modelo="Placa para Carro"
          price="280"
          Image={Image}
          className='h-full w-full'
          imgProps={{
            src: '/placatcerto.png',
            alt: 'placa para carro',
            width: 300,
              height: 0,
           }}
           parcela='3x sem juros'
           subtitle='Particular, Aluguel e Oficial'
      />
        <CardPrice
            modelo="Placa para Moto"
            price="180"
            Image={Image}
            parcela='3x sem juros'
            subtitle='Particular, Aluguel e Oficial'
            className='h-full w-full'
            imgProps={{
              src: '/moto22.png',
              alt: 'placa para moto',
              width: 600,
              height: 200,
            }}
        />
      <CardPrice
          modelo="Suporte para placa"
          price="20"
          Image={Image}
          className='h-full w-full'
          imgProps={{
            src: '/suporte22.png',
            alt: 'suporte para carro',
            width: 300,
              height: 0,
           }}
      />
      <CardPrice
          modelo="Lacre para Parafuso"
          price="15"
          Image={Image}
          className='h-full w-full' 
          imgProps={{
            src: '/cbm2.png',
            alt: 'lacre para parafusos',
            width: 300,
            height: 0,
           }}
      />
      </motion.div>
     
    </div>
  </div>
    </motion.div>
    
  )
}

export default PriceSection