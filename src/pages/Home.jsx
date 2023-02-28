import React from 'react'
import Navbar from '../components/Navbar'
import Jhin from '../assets/jhin.jpg'
import Logo from '../assets/Logo.png'
import { Carousel } from 'flowbite-react'
import Slider from '../components/Slider'

const Home = () => {
  const images = [
    { id: 1, url: Jhin },
    { id: 2, url: Logo },
  ]

  return (
    <div className='h-screen relative'>
      <div>
        <Slider />
      </div>
      <div className='fixed top-0 w-full pt-5'>
        <Navbar />
      </div>
      <div className='w-full h-[1000px]'></div>
    </div>
  )
}

export default Home
