'use client'
import React from 'react';
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

const Zapfloat = () => {
  return (
    <motion.div 
      className='fixed bottom-0 right-0 z-100 mr-10 mb-10'
      animate={{ y: [0, -10, 0] }} 
      transition={{ duration: 1.5, repeat: Infinity }} 
    >
      <a target='_blank' href="https://api.whatsapp.com/send?phone=5585996950064&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento!">
        <IoLogoWhatsapp className='rounded-lg' size={60} fill='#25D366' />
      </a>
    </motion.div>
  );
}

export default Zapfloat;
