import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import sliderItems from '../Data'

function Home() {
  return (
    <div>
    <Navbar/>
    <Slider id='id' img='img' title='title' desc='desc' bg='bg'/>
    </div>
  )
}

export default Home