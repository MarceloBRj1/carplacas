'use client'
import React, { useEffect } from 'react'
import Image  from 'next/image'
import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'


const PriceSection = () => {
  return (
<div className="bg-white -mt-24 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <p className="mt-2 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">Conheça os nossos Produtos
      </p>
      <p className="text-base font-semibold leading-7 text-orange-600">Os melhores preços da região.</p>
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-cyan-600"><Separator /></p>
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-blue-900">
        <h3 id="tier-freelancer" className="text-lg font-semibold leading-8 text-orange-600">Placa para Moto</h3>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-orange-500">R$149,99</span>
          <span className="text-sm font-semibold leading-6 text-blue-900">à vista</span>
        </p>
        <a href="#" aria-describedby="tier-freelancer" className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-900 text-white shadow-sm hover:bg-orange-500 ">Comprar</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-400">
          <li className="flex gap-x-3 text-slate-900 text-lg">
            <svg className="h-6 w-5 flex-none text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            PIV no padrão Mercosul com dimensão de 200mm x 170mm para motocicletas.
          </li>
        </ul>
        <Image src="/moto2.png" alt="Moto" width={280} height={280} className='ml-2 lg:ml-4 flex' />
      </div>
      <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-blue-900">
        <h3 id="tier-freelancer" className="text-lg font-semibold leading-8 text-orange-600">Placa para Carro</h3>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-orange-500">R$259,99</span>
          <span className="text-sm font-semibold leading-6 text-blue-900">à vista</span>
        </p>
        <a href="#" aria-describedby="tier-freelancer" className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-900 text-white shadow-sm hover:bg-orange-500 ">Comprar</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-400">
          <li className="flex gap-x-3 text-slate-900 text-lg">
            <svg className="h-6 w-5 flex-none text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            PIV no padrão Mercosul, com dimensão de 400mm x 130mm para automóveis em geral.
          </li>
        </ul>
        <Image src="/placacarro.png" alt="Moto" width={220} height={280} className='ml-11 lg:ml-10 flex' />
      </div>
      <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-blue-900">
        <h3 id="tier-freelancer" className="text-lg font-semibold leading-8 text-orange-600">Placa para Moto</h3>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-orange-500">R$149,99</span>
          <span className="text-sm font-semibold leading-6 text-blue-900">à vista</span>
        </p>
        <a href="#" aria-describedby="tier-freelancer" className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-900 text-white shadow-sm hover:bg-orange-500 ">Comprar</a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-400">
          <li className="flex gap-x-3 text-slate-900 text-lg">
            <svg className="h-6 w-5 flex-none text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            PIV no padrão Mercosul com dimensão de 200mm x 170mm para motocicletas.
          </li>
        </ul>
        <Image src="/moto2.png" alt="Moto" width={280} height={280} className='ml-2 lg:ml-4 flex' />
      </div>
    </div>
  </div>
</div>

  )
}

export default PriceSection