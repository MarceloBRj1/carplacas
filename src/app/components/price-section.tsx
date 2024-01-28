import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

const PriceSection = () => {
  return (
    <div className='container ' id='valores'>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-4xl text-black font-extrabold'> Conheça nossos preços  <br /></CardTitle>
          <CardDescription className='text-1xl text-blue-900 '>O melhor preço da região </CardDescription>
        </CardHeader>
        <Card className='flex text-center'>
          <CardHeader>
            <CardTitle>
              Placa para Moto
            </CardTitle>
            <CardContent>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8 ">
            <p className="text-base font-semibold text-blue-800 ">Unidade de placa Mercosul</p>
            <Image src='/placatcertomoto.png' className='' width={300} height={300} alt='placas'/>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">R$180</span>
            </p>
            <CardFooter>em até 3x no cartão</CardFooter>
            <a href="#" className="mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Adquira agora!</a>
            <p className="mt-6 text-xs leading-5 text-gray-600" 
            >Invoices and receipts available for easy company reimbursement</p>
          </div>
        </div>
      </div>
            </CardContent>
          </CardHeader>
          <CardHeader>
            <CardTitle>
              Placa para Carro
            </CardTitle>
            <CardContent>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-blue-800">Par de placas Mercosul</p>
            <Image src='/placatcerto.png' width={250} height={250} alt='placas'  />
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">R$280</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
            </p>
            <CardFooter>em até 3x no cartão</CardFooter>
            <a href="#" className="mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Compre agora!</a>
            <p className="mt-6 text-xs leading-5 text-gray-600"
            >Invoices and receipts available for easy company reimbursement</p>
          </div>
        </div>
      </div>
            </CardContent>
          </CardHeader>
          <CardHeader>
            <CardTitle>
              Suporte para Placas
            </CardTitle>
            <CardContent>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8 mt-4">
            <p className="text-base font-semibold text-blue-800">Suporte</p>
            <Image src='/suporte.png' width={250} height={250} alt='placas' />
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">R$20</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
            </p>
            <a href="#" className="mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Veja mais</a>
            
          </div>
        </div>
      </div>
            </CardContent>
          </CardHeader>
        </Card>
      </Card>
    </div>
  )
}

export default PriceSection