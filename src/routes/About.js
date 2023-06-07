import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PlayerCard from '../components/PlayerCard'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Our Squad" text="Welcome to the Team."/>
      <PlayerCard />
      <Footer />
    </div>
  )
}

export default About