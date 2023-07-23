import React from 'react'
import Navbar from "../../components/Navbar"
import Slider from "../../UI/Slider"
import Partner from "../../UI/Partners"
import Mobile from "../../UI/Mobile"

const index = () => {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Partner/>
        <Mobile/>
    </>
  )
}

export default index