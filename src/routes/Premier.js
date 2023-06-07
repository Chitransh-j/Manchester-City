import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import MatchCard from '../components/MatchCard'

const Premier = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PREMIER LEAGUE 2022-23." text="Welcome to the Match analyses."/>
      <MatchCard/>
      <Footer />
    </div>
  )
}

export default Premier