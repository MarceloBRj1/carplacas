'use client'
import React from 'react';
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

const Zapfloat = () => {
  return (
    <motion.div 
      className='fixed bottom-12 right-3 sm:z-10 sm:right-2 lg:botton-0 lg:right-32 lg:z-10 lg:mr-48'
      animate={{ y: [0, -10, 0] }} 
      transition={{ duration: 2, repeat: Infinity }} 
    >
      <a target='_blank' href="https://api.whatsapp.com/send?phone=5585996950064&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento!">
        <IoLogoWhatsapp className='rounded-lg' size={50} fill='#25D366' />
      </a>
    </motion.div>
  );
}

export default Zapfloat;
