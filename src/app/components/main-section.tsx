'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MainSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 mt-20 lg:mt-0 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-transparent">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -100 }}
          className="relative overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full sm:mb-20"
        >
          <Image
            src='/equipecar.jpeg'
            width={1000}
            height={1000}
            alt='equpe carplacas'
            className=''
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -100 }}
          className="lg:py-24 lg:pl-24"
        >
          <h2 className="text-3xl  lg:-mt-10 text-blue-900 font-bold sm:text-4xl text-center lg:text-right ">Venha emplacar o seu carro com a gente!</h2>

          <p className="mt-4 text-gray-600 text-center font-sans text-2xl lg:text-right">Na <span className="text-orange-400">CARPLACAS</span>, priorizamos a qualidade em cada etapa do processo de fabricação. Utilizamos materiais premium e tecnologia de ponta para garantir que sua placa seja durável, resistente e mantenha sua legibilidade ao longo do tempo.</p>

          <Button className='flex mx-auto mt-10 bg-orange-400 hover:bg-blue-900 focus:bg-blue-900'> 
          <a target='_blank' href="https://api.whatsapp.com/send?phone=5585996950064&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento!">Entre em contato conosco</a></Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
