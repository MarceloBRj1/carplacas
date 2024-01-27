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


const MiddleBanner = () => {

  function armazenarImagens() {
    const imagens = [ 
      '/seila1.png',
      '/skyl.jpg',
      '/foto3.jpg',
      '/foto4.jpg',
      '/foto6.jpg',
    ];
    return imagens;
  }
  const imagensArmazenadas = armazenarImagens();

  return (
      <div className='container flex justify-center mb-10'>
       <Carousel>
        
        <CarouselContent className='w-[1400px] h-[350px] '>
        {imagensArmazenadas.map((imagem, index) => (
            <CarouselItem key={index}>
             <div className="p-1">
               <Card>
                 <CardContent className="flex items-center justify-center rounded-xl">
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
  )
}

export default MiddleBanner
