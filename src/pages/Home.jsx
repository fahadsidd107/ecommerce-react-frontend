import React from 'react'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import sliderItems from '../Data'

function Home() {
  return (
    <div>
    <Navbar/>
    <Slider/>
    <Category/>
    </div>
  )
}

export default Home