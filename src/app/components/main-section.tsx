'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'



const MainSection = () => {
  
  return (
  <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-transparent  ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -100 }}
      className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image 
        src='/emplacamento1.png'
        width={500}
        height={500}
        alt='rapaz emplacando'
        />
      </motion.div>
      
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -100 }}
      className="lg:py-24">
        <h2 className="text-3xl text-blue-900 font-bold sm:text-4xl text-center">Venha emplacar conosco</h2>

        <p className="mt-4 text-gray-600 text-center">
        A Carflex é um destino exclusivo para entusiastas automotivos, oferecendo uma experiência única de compras e ofertas. Com uma variedade de serviços especializados em manutenção, lavajato, serviços automotivos e muito mais, o Shopping que é o lugar perfeito para encontrar tudo o que você precisa para cuidar do seu veículo.
        </p>

        <Button className='flex mx-auto mt-20 bg-orange-400 hover:bg-blue-900 focus:bg-blue-900'> <a target='_blank' href="https://api.whatsapp.com/send?phone=5585981093099&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento!">Entre em contato conosco</a></Button>
      </motion.div>
    </div>
  </div>
</section>
  )
}

export default MainSection