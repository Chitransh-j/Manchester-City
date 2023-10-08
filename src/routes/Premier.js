import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import MatchCard from '../components/MatchCard'
import AnimatedPage from '../components/AnimatedPage'

const Premier = () => {
  return (
    <AnimatedPage>
    <div>
      <Navbar />
      <HeroImg2 heading="PREMIER LEAGUE 22-23." text="Welcome to the analysis of the Matches. "/>
      <MatchCard/>
      <Footer />
      
    </div>
    </AnimatedPage>
  )
}

export default Premier