import React from 'react'
import HowItWorks from '../components/HowItWorks'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import Categories from '../components/Categories'
import CTA from '../components/CTA'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Categories/>
         <HowItWorks />
        <CTA/>
        <FAQ/>
     

     
    </div>
  )
}

export default Home
