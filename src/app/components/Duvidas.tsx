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
        <AccordionItem value="item-0">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>Como solicitar a placa Mercosul?</AccordionTrigger>
            <AccordionContent className=' text-center lg:text-left lg:ml-14'>
              <p className='text-black text-xl lg:ml-6 lg:mr-2'>• Acesse o site do Detran - CE</p>
              <p className='text-black text-xl lg:ml-6 lg:mr-2'>• Solicite a emissão de um novo Certificado de Registro do Veículo</p>
              <p className='text-black text-xl lg:ml-6 lg:mr-2'>• Leve seu veículo para a vistoria automotiva, ela é necessária para liberar o novo CRV</p>
              <p className='text-black text-xl lg:ml-6 lg:mr-2'>• Com a guia de autorização + CNH ou RG em mãos, o proprietário do veículo ira se dirigir até alguma de nossas lojas.</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>Quando é necessário a troca de Placas?</AccordionTrigger>
            <AccordionContent className=' text-center lg:text-left lg:ml-14 block lg:flex '>
              <p className='text-black text-xl lg:ml-6 lg:mr-2'>• Veículos em circulação: 
              <span>
                <br /> Troca de município e/ou estado. <br /> Se as placas forem furtadas. <br /> Se as placas forem danificadas.<br />Se o veículo mudar de categoria.
              </span>
              </p>
              <p className='text-black text-xl lg:ml-6 lg:mr-2'>• Veículos novos: <br /> Primeiro emplacamento.</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl text-blue-900 lg:ml-20'>O que é preciso para trocar a placa?</AccordionTrigger>
          <AccordionContent className=' text-center lg:text-left lg:ml-14'>
            <p className='text-black text-xl lg:ml-6 lg:mr-2'>
            Com a autorização de estampagem em mãos, é necessário que o proprietário do veículo esteja no local para fazer a troca da placa com o seu documento, seja CNH ou RG.
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