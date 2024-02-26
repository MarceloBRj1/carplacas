import Image from 'next/image'
import HeaderSection from './components/header-section'
import MainSection from './components/main-section'
import BannerTop from './components/banner'
import { Separator } from '@/components/ui/separator'
import MiddleBanner from './components/middle-banner'
import PriceSection from './components/price-section'
import AreWe from './components/ondeEstamos'
import Contato from './components/contato'
import Footer from './components/footer'




export default function Home() {
  
  return (
  <div>
    <link rel="icon" href="/logoce2.png" sizes="any" />
    <Separator className='bg-slate-500' />
    <HeaderSection />
    <MiddleBanner />
    <Separator className='bg-slate-500' />
    <MainSection />
    <Separator className='bg-slate-500' />
    <PriceSection />
    <Contato />
    <Separator className='bg-slate-500' />
    <AreWe /> 
    <Footer />
  </div>
  )
}
