import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Headertop = () => {
  const [copied, setCopied] = useState(false);

  const CopiarTexto = () => {
    const textToCopy = '(85)99695-0064';
    navigator.clipboard.writeText(textToCopy);
    setTextoCopiado();
  };

  const setTextoCopiado = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div className="aspect-[577/310] w-[36.0625rem] bg-white opacity-30" />
      </div>
      <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div className="aspect-[577/310] w-[36.0625rem] bg-white opacity-30" />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-lg leading-6 text-gray-900 ">
          <strong className="font-semibold"> <span className='text-orange-500'>CAR</span><span className='text-blue-900'>PLACAS</span> </strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <span className='cursor-pointer hover:text-orange-500' onClick={CopiarTexto}>(85) 99695-0064</span>
        </p>
        <a href="mailto:atendimento@carplacas.com" className="flex-none rounded-full bg-orange-500 px-3.5 py-1 text-lg font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
          atendimento@carplacas.com
        </a>
      </div>
      <div className="lg:flex flex-1 gap-4 sm:gap-2 hidden">
        <a href="https://api.whatsapp.com/send?phone=5585996950064&text=Ol%C3%A1%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" target='_blank'>
          <FaWhatsapp size={35} fill='#25D366' />
        </a>
        <a href="https://www.instagram.com/carplacas/" target='_blank'>
          <FaInstagram size={35} fill='#E1306C'/>
        </a>
      </div>
      {copied && <div style={{ position: 'fixed', bottom: '20px', left: '20px', backgroundColor: 'orange', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>O número foi copiado!</div>}
    </div>
  );
};

export default Headertop;
