import HeaderSection from './components/header-section'
import MainSection from './components/main-section'
import MiddleBanner from './components/middle-banner'
import PriceSection from './components/price-section'
import AreWe from './components/ondeEstamos'
import Contato from './components/contato'
import Footer from './components/footer'
import Duvidas from './components/Duvidas'
import Zapfloat from './components/Zapfloat'





export default function Home() {
  
  return (
  <div>
    <HeaderSection />
    <MiddleBanner />
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
