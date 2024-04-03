import React, { useEffect } from 'react'
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
import { EffectFade, EffectCoverflow } from 'swiper/modules';





const Newbanner = () => {
  const [slidesPerView, setSlidesPerView] = React.useState(1)

  const fotos = [
    {id: 1, imagem: '/banner1.jpeg'},
    {id: 2, imagem: '/banner2.jpeg'},
    {id: 3, imagem: '/banner3.jpeg'},
  ]



  return (
    <div className='container hidden lg:block mt-2'>  
      <Swiper
      effect='coverflow'
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{ delay: 2500 }} 
      loop={true}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true,}}
      navigation
      >
        {fotos.map(foto => (
          <SwiperSlide key={foto.id}>
            <div>
              <Image 
              className='w-full sm:h-90 h-90 object-cover rounded-lg'
              width={3500} height={500} 
              src={foto.imagem} 
              alt="imagem" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Newbanner