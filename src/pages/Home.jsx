import React from 'react'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'


function Home() {
  return (
    <div>
    <Navbar/>
    <Slider/>
    <Category/>
    <Products/>
    </div>
  )
}

export default Home