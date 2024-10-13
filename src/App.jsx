
import React from 'react'
import './App.css'
import About from './Pages/About'
import Faqs from './Pages/Faqs'
import Footer from './Pages/Footer'
import Hero from './Pages/Hero'
import Mint from './Pages/Mint'
import Nav from './Pages/Nav'
import Prizes from './Pages/Prizes'
import Roadmap from './Pages/Roadmap'
import Collections from './Pages/Collection'

function App() {
 

  return (
    <>
<div className="overflow-x-hidden">
    <Nav/>
    <Hero/>
    <Mint/>
    <About/>
    <Prizes/>
    <Collections/>
    <Roadmap/>
    <Faqs/>
      <Footer/>
      </div>
    </>
  )
}

export default App
