import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Hello ! This is a website made by Chitransh Jawere. Feel
      free to drop any suggetions or queries."/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact