'use client'
import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Duvidas = () => {
  return (    
    <section className='bg-white container flex-block mb-5 '>
      <h1 className='text-4xl font-bold text-center mt-10 text-orange-500'>Dúvidas frequentes</h1>
      <Accordion type="single" collapsible className='lg:mx-10 mx-0 md:mx-10 my-10 self-center'>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>O que é preciso para trocar a placa?</AccordionTrigger>
          <AccordionContent className=' text-center lg:text-left lg:ml-14'>
            <p className='text-black text-xl lg:ml-6 lg:mr-2'>
            Com a autorização de estampagem em mãos, é necessário que o proprietário do veículo esteja no local para fazer a troca da placa com o seu documento, seja CNH ou RG.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>Quando é necessário fazer a troca de placas?</AccordionTrigger>
          <AccordionContent className=' text-center lg:text-left lg:ml-14'>
            <p className='text-black text-xl lg:ml-6 lg:mr-2'>
            A troca da placa pode ser feita de forma voluntária pelo proprietário do carro, em caso de perca ou roubo, avaria da placa antiga do veículo e transferência do veículo
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>Quais documentos preciso levar?</AccordionTrigger>
          <AccordionContent className='text-center lg:text-left lg:ml-14'>
            <p className='text-black text-xl lg:ml-6 lg:mr-2'>
            Guia de autorização de estampagem e CNH do proprietário do veículo.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>Quanto tempo a placa fica pronta?</AccordionTrigger>
          <AccordionContent className='text-center lg:text-left lg:ml-14'>
            <p className='text-black text-xl lg:ml-6 lg:mr-2'>
              A fabricação e instalação da placa mercosul é feita em menos de 15 minutos!
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>  

      <div className='flex-block'>
        <h1 className='text-center text-xl'>Mais dúvidas? Fale com um de nossos consultores no <span className='text-lime-500 cursor-pointer hover:underline'>Whatsapp</span> e teremos o prazer em lhe ajudar!</h1>
      </div>
    </section>
  )
}

export default Duvidas