import Image from 'next/image'
import React from 'react'

const Contato = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>CONTATO</h1>
      <div className=' grid grid-cols-2'>
      <div className='text-center'>
        Venha fazer o seu orçamento com o melhor preço da região
      </div>
      <div>
        <Image 
        src={'/contato1.jpeg'}
        alt='contato'
        width={500}
        height={500}
        />
      </div>

      </div>

    </div>
  )
}

export default Contato