import Image from 'next/image'
import HeaderSection from './components/header-section'
import MainSection from './components/main-section'
import BannerTop from './components/banner'
import { Separator } from '@/components/ui/separator'
import MiddleBanner from './components/middle-banner'

export default function Home() {
  return (
  <div>
    <BannerTop />
    <Separator className='bg-slate-500' />
    <HeaderSection />

    <MiddleBanner />
    <MainSection />
  </div>
  )
}
