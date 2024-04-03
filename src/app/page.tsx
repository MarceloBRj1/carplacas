'use client'
import HeaderSection from './components/header-section'
import MainSection from './components/main-section'
import PriceSection from './components/price-section'
import AreWe from './components/ondeEstamos'
import Contato from './components/contato'
import Footer from './components/footer'
import Duvidas from './components/Duvidas'
import Zapfloat from './components/Zapfloat'
import Headertop from './components/Headertop'
import Newbanner from './components/Newbanner'





export default function Home() {
  
  return (
  <div>
    <Headertop />
    <HeaderSection />
    <Newbanner />
    <MainSection />
    <Zapfloat />
    <PriceSection />
    <Duvidas />
    <AreWe /> 
    <Contato />
    <Footer />
  </div>
  )
}
