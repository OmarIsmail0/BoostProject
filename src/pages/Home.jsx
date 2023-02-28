import React from 'react'
import Navbar from '../components/Navbar'
import Jhin from '../assets/jhin.jpg'
import Logo from '../assets/Logo.png'
import { Carousel } from 'flowbite-react'

const Home = () => {
  const images = [
    { id: 1, url: Jhin },
    { id: 2, url: Logo },
  ]

  return (
    <div className='h-screen relative'>
      <div className={`flex justify-between items-center z-30 w-full`}>
        {/* <div
          style={{ backgroundImage: `url(${images[0].url})` }}
          className='duration-500 w-full h-full'
        ></div> */}
        <img alt='jhin' src={Jhin} className='w-full h-full object-cover' />
      </div>
      <div className='fixed top-0 w-full pt-5'>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
