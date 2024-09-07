
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Betting from './pages/Betting/Betting'
import Home from './pages/Home/Home'
import WhyLaserBook from './pages/WhyLaserBook/WhyLaserBook'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Home/>
        <Betting/>
        <WhyLaserBook/>
        <Footer/>
      </div>
    </>
  )
}

export default App
