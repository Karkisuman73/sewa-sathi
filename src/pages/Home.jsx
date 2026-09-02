import React from 'react'
import HowItWorks from '../components/HowItWorks'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import Categories from '../components/Categories'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Categories/>
        <FAQ/>
      <HowItWorks />

     
    </div>
  )
}

export default Home
