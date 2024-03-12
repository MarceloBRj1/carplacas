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
          <AccordionContent className='text-left ml-14'>
            <p className='text-black text-xl ml-6 mr-2'>
            É necessário solicitar junto ao DETRAN, pagar as taxas no DETRAN, realizar vistoria do veículo e após esse processo o cliente ira receber uma  guia de autorização de estampagem com esse documento a confecção da placa mercosul pode ser feita.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>Quando é necessário fazer a troca de placas?</AccordionTrigger>
          <AccordionContent className='text-left ml-14'>
            <p className='text-black text-xl ml-6 mr-2'>
            A troca da placa pode ser feita de forma voluntaria pelo proprietário do carro, em caso de perca ou roubo, avaria da placa antiga do veiculo e transferência do veiculo
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>Quais documentos preciso levar?</AccordionTrigger>
          <AccordionContent className='text-left ml-14'>
            <p className='text-black text-xl ml-6 mr-2'>
            Guia de autorização de estampagem e documento do veiculo.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>Quanto tempo a placa fica pronta?</AccordionTrigger>
          <AccordionContent className='text-left ml-14'>
            <p className='text-black text-xl ml-6 mr-2'>
              A placa fica pronta em 15 minutos e a instalação é feita na hora!
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>  

      <div className='flex-block'>
        <h1 className='text-center text-xl'>Para qualquer outra dúvida nós chame no <span className='text-lime-500 cursor-pointer hover:underline'>Whatsapp</span> e teremos o prazer em lhe ajudar!</h1>
      </div>
    </section>
  )
}

export default Duvidas