import Image from 'next/image'
import HeaderSection from './components/header-section'
import MainSection from './components/main-section'
import BannerTop from './components/banner'
import { Separator } from '@/components/ui/separator'
import MiddleBanner from './components/middle-banner'
import PriceSection from './components/price-section'


export default function Home() {
  return (
  <div>
    <link rel="icon" href="/logoce2.png" sizes="any" />
    <BannerTop />
    <Separator className='bg-slate-500' />
    <HeaderSection />
    <MiddleBanner />
    <MainSection />
    <PriceSection />
  </div>
  )
}
