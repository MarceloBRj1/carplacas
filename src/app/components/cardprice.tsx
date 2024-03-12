'use client'
import React, { useState, useRef, useEffect, MouseEvent } from 'react'
import { motion } from "framer-motion"

interface CardPriceProps {
  modelo: string;
  price: string;
  Image: React.ElementType;
  imgProps: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  children?: React.ReactNode;
  parcela?: string;
  subtitle?: string;
}

const CardPrice: React.FC<CardPriceProps> = ({ modelo, price, Image, imgProps, parcela, subtitle }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        className="group relative"
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover: lg:h-80">
          <div className='h-full w-full object-contain object-center lg:h-full lg:w-full'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
              <Image className='h-full w-full object-contain object-center lg:h-full lg:w-full' {...imgProps} />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-[20px] text-white">
              <div className='cursor-pointer'>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {modelo}
              </div>
            </h3>
          </div>
          <p className="text-[20px] font-medium text-white"> <span className='text-lime-500'>R$</span> {price}</p>
        </div>
        <p className=' text-white text-end text-sm'>{parcela}</p>
      </motion.div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-800 bg-opacity-50 h-screen" onClick={handleClickOutside}>
          <div ref={modalRef} className="bg-blue-800 p-8 rounded-lg max-w-7xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl text-white font-bold mb-4">{modelo}</h2>
            <div className="bg-gray-300 p-4">
            <Image className=' object-contain object-center lg:h-full lg:w-full' {...imgProps} />
            </div>
            <p className="text-white mt-4">{subtitle}</p>
            <button className="bg-red-500 px-4 py-2 rounded-lg mt-10 flex absolute top-0 right-12" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPrice;
