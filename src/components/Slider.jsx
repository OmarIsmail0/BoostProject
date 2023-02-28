import { useState, useEffect } from 'react'
import lol from '../assets/lol.png'
import csgo from '../assets/csgo.jpg'
import apex from '../assets/apex.png'
import val from '../assets/valorant.png'
import overwatch from '../assets/overwatch.png'

export const Slider = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const isLastSlide = index === slides.length - 1
    const intervalId = setInterval(() => {
      const newIndex = isLastSlide ? 0 : index + 1
      setIndex(newIndex)
    }, 5000)

    return () => clearInterval(intervalId)
  })

  const slides = [
    { url: lol },
    { url: csgo },
    { url: apex },
    { url: val },
    { url: overwatch },
  ]

  return (
    <div className='max-w-full h-screen w-full'>
      <div
        style={{ backgroundImage: `url(${slides[index].url})` }}
        className='w-full h-full bg-cover duration-500'
      ></div>
    </div>
  )
}

export default Slider
