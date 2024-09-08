
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Betting from './pages/Betting/Betting'
import Celebs from './pages/Celebs/Celebs'
import Home from './pages/Home/Home'
import HowItsWorks from './pages/HowItsWorks/HowItsWorks'
import OurPartner from './pages/OurPartner/OurPartner'
import WhyLaserBook from './pages/WhyLaserBook/WhyLaserBook'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Home/>
        <Betting/>
        <OurPartner />
        <HowItsWorks />
        <Celebs />
        <WhyLaserBook/>
        <Footer/>
      </div>
    </>
  )
}

export default App
