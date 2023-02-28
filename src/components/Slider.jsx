import React from 'react'
import Jhin from '../assets/jhin.jpg'
import Logo from '../assets/Logo.png'
import { Carousel } from 'flowbite-react'

const Slider = () => {
  return (
    <div className='w-full h-4/5'>
      <div class='relative h-56 overflow-hidden rounded-lg md:h-96'>
        <div class='hidden duration-700 ease-in-out' data-carousel-item>
          <img
            src='/docs/images/carousel/carousel-1.svg'
            class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            alt='...'
          />
        </div>

        <div
          class='hidden duration-700 ease-in-out'
          data-carousel-item='active'
        >
          <img
            src='/docs/images/carousel/carousel-2.svg'
            class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            alt='...'
          />
        </div>
      </div>
    </div>
  )
}

export default Slider
