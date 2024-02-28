'use client'
import { Separator } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import {motion} from 'framer-motion'





const Contato = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: -100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0, y: 100 }}
    className="bg-white text-white">
      <Separator />
    <motion.div
    
    className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-4xl font-bold sm:text-4xl text-blue-900">Nossos meios de contato</h2>
  
        <p className="mt-4 text-black text-1.5xl font-sans">
        Nossa equipe está sempre pronta para ajudá-lo em todas as etapas da instalação da sua placa. Na CarPlacas, oferecemos um atendimento personalizado para garantir que todas as suas necessidades sejam atendidas de forma eficiente e satisfatória.
        </p>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          className="block rounded-xl border border-blue-800 p-8 shadow-xl transition hover:border-orange-500/5 hover:shadow-orange-500/10"
          href="https://api.whatsapp.com/send?phone=5585996950064&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
        >
          <FaWhatsapp size={45} fill='#25D366' />
          <h2 className="mt-4 text-xl font-bold text-blue-900 hover:text-orange-400 ">WhatsApp</h2>
          <p className=" text-sm text-black">
            Nosso WhatsApp com atendimento personalizado <br />
            <span className='text-blue-900 text-2xl hover:text-orange-400'> (85) 99695-0064</span>
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-blue-800 p-8 shadow-xl transition hover:border-orange-500/5 hover:shadow-orange-500/10"
          href=""
        >
          <SiInstagram size={45} fill='#E1306C' />

          <h2 className="mt-4 text-xl font-bold text-blue-900 hover:text-orange-500 ">Instagram</h2>
          <p className=" text-sm text-black">
            Entre em contato via Instagram e veja as atualizações no nosso Feed
            <span className='text-orange-500 text-2xl text-center hover:text-blue-900'> @carplacas</span>
          </p>
        </a>
        
        <a
          className="block rounded-xl border border-blue-800 p-8 shadow-xl transition hover:border-orange-500/5 hover:shadow-orange-500/10"
          href=""
        > 
          <MdEmail size={45} fill='#C71610' />
          <h2 className="mt-4 text-xl font-bold text-blue-900 hover:text-orange-500 ">Gmail</h2>
          <p className=" text-sm text-black">
            Envie um email com sua duvida ou sugestão
            <span className='text-orange-500 text-2xl text-center hover:text-blue-900'> atendimentocarplacas <br />@gmail.com</span>
          </p>
        </a>
        
        
  
        
  
       
      </div>  
    </motion.div>
  </motion.section>
  )
}

export default Contato