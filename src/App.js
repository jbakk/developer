import './App.css'

import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='App'>
      <h1>DEVELOPERS</h1>
      <Navbar />
      <Intro />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
