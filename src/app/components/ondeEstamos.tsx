'use client'
import React from 'react';
import { FaWaze } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AreWe = () => {
  return (
    <motion.div
      id='lojas'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className='bg-blue-900 min-h-[1200px] lg:min-h-[700px] container mx-auto rounded-lg flex flex-col justify-center items-center'
    >
      <h1 className='text-center text-white font-sans font-semibold text-3xl mt-6 mb-10'>
        Grande Novidade: Agora com Duas Lojas para Melhor Atendê-lo!
      </h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 w-full max-w-screen-lg'>
        <div className='bg-gray-800 rounded-lg p-6 flex flex-col justify-center items-center'>
          <span className='text-orange-400 font-sans text-xl'>Matriz: Loja Maestro</span>
          <p className='font-sans text-white mt-3'>
            Av. Maestro Lisboa, 395, Lagoa Sapiranga - Coite, Fortaleza - CE, 60830-185
          </p>
          <iframe
            className='mt-3 w-full sm:w-auto h-64 sm:h-80'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.009888294027!2d-38.480171388732906!3d-3.807941843567456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7457ba9aedbbf%3A0x2d6ca747e2c0b093!2sAv.%20Maestro%20Lisboa%2C%20395%20-%20Lagoa%20Sapiranga%20(Coit%C3%A9)%2C%20Fortaleza%20-%20CE%2C%2060830-185!5e0!3m2!1spt-BR!2sbr!4v1706888128628!5m2!1spt-BR!2sbr'
            loading='lazy'
            title='Loja Maestro'
          ></iframe>
          <div className='mt-3'>
            <a
              href='https://waze.com/ul/h7pkdk6v87'
              target='_blank'
              className='flex items-center text-white hover:text-orange-400 font-sans'
            >
              <span>Ir com Waze</span>
              <FaWaze size={30} className='ml-2' />
            </a>
          </div>
        </div>
        <div className='bg-gray-800 rounded-lg p-6 flex flex-col justify-center items-center'>
          <span className='text-orange-400 font-sans text-xl'>Filial: Loja Maraponga</span>
          <p className='font-sans text-white mt-3'>
            Av. Godofredo Maciel, 2113 - Maraponga, Fortaleza - CE, 60710-001
          </p>
          <iframe
            className='mt-3 w-full sm:w-auto h-64 sm:h-80'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.7898973195298!2d-38.56911369783913!3d-3.794481897303203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749359a84016d%3A0x8cbab10c1eb38a9c!2sSH%20Emplacamentos%20-%20Despachante%20Detran%2C%20licenciamento%2C%20IPVA%2C%20Multas%20em%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1709040282593!5m2!1spt-BR!2sbr'
            loading='lazy'
            title='Loja Maraponga'
          ></iframe>
          <div className='mt-3'>
            <a
              href='https://waze.com/ul/h7pkd6m6bc'
              target='_blank'
              className='flex items-center text-white hover:text-orange-400 font-sans'
            >
              <span>Ir com Waze</span>
              <FaWaze size={30} className='ml-2' />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AreWe;
