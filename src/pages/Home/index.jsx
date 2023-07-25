import React from 'react'
import Navbar from "../../components/Navbar"
import Slider from "../../UI/Slider"
import Partner from "../../UI/Partners"
import Mobile from "../../UI/Mobile"
import TopQuestion from "../../UI/TopQuestion"
import Footer from "../../components/Footer"
import './media.scss'

const index = () => {
  return (
    <div className='wrapper'>
        <Navbar/>
        <Slider/>
        <Partner/>
        <Mobile/>
        <TopQuestion/>
        <Footer/>
    </div>
  )
}

export default index