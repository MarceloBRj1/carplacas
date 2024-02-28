'use client'
import React from 'react';
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

const CardPrice: React.FC<CardPriceProps> = ({ modelo, price, Image, imgProps, parcela,subtitle }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative">
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
  );
};

export default CardPrice;
