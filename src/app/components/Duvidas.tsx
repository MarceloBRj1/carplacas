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
    <section className='bg-white container h-[700px] flex-block'>
      <h1 className='text-4xl font-bold text-center mt-10 text-orange-500'>Dúvidas frequentes</h1>
      <Accordion type="single" collapsible className='bg-slate-100 mt-10'>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl text-blue-900 ml-20'>O que é preciso para trocar a placa?</AccordionTrigger>
          <AccordionContent>
            <p className='text-black text-xl ml-6 mr-2'>
            É necessário solicitar junto ao DETRAN, pagar as taxas no DETRAN, realizar vistoria do veículo e após esse processo o cliente ira receber uma  guia de autorização de estampagem com esse documento a confecção da placa mercosul pode ser feita.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='text-xl text-blue-900 ml-20'>Quando é necessário fazer a troca de placas?</AccordionTrigger>
          <AccordionContent>
            <p className='text-black text-xl ml-6 mr-2'>
            A troca da placa pode ser feita de forma voluntaria pelo proprietário do carro, em caso de perca ou roubo, avaria da placa antiga do veiculo e transferência do veiculo
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='text-xl text-blue-900 ml-20'>Quais documentos preciso levar?</AccordionTrigger>
          <AccordionContent>
            <p className='text-black text-xl ml-6 mr-2'>
            Guia de autorização de estampagem e documento do veiculo.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className='text-xl text-blue-900 ml-20'>Quanto tempo a placa fica pronta?</AccordionTrigger>
          <AccordionContent>
            <p className='text-black text-xl ml-6 mr-2'>
              A placa fica pronta em 15 minutos e a instação é feita na hora!
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>  

      <div className='flex-block'>
        <h1 className='text-center'>Para qualquer outra dúvida nós chame no WhatsApp e lhe ajudamos!</h1>
        <div>
          <a href="#">
            <button>
              Ir para o WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Duvidas