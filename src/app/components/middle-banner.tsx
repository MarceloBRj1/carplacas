'use client'
import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'



const MiddleBanner = () => {

  function armazenarImagens() {
    const imagens = [ 
      '/banner2.jpeg',
      '/banner1.jpeg',
      '/banner3.jpeg',
    ];
    return imagens;
  }
  const imagensArmazenadas = armazenarImagens();

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    
    className=' sm:block hidden'>
      <div className='container'>
       <Carousel >
        <CarouselContent className="flex">
        {imagensArmazenadas.map((imagem, index) => (
            <CarouselItem key={index}>
             <div className="p-1">
               <Card >
                 <CardContent className="flex rounded-xl">
                   <Image width={3500} height={500} src={imagem} alt={`Imagem ${index + 1}`} className='px-5 py-5 rounded-lg h-80' />
                 </CardContent>
                </Card>
              </div>
           </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
       <CarouselNext />
      </Carousel>
    </div>
    </motion.div>
      
  )
}

export default MiddleBanner
