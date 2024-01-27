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
      '/public/sky1.jpg',
      'caminho/para/imagem2.jpg',
      'caminho/para/imagem3.jpg',
      'caminho/para/imagem4.jpg',
      'caminho/para/imagem5.jpg'
    ];
    const imagensArmazenadas = armazenarImagens();
    
    return imagens;
  }

  return (
      <div className='container w-full flex justify-center'>

      <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1} </span>
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
