import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <NavBar />
      <Hero />
      <Services />
      <Banner />
      <Banner2 />
      <Subscribe />
      <Footer />

    </main>
  )
}

export default App
