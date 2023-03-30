import './App.css'
import Footer from './components/footer'
import HeroSection from './components/hero'
import Navbar from './components/navBar'
import ServiceSection from './components/serviceSection'
import WorkSection from './components/workSection'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <ServiceSection />
        <WorkSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
