import { useState } from 'react'
import player from '../../assets/player.jpg'
import GamesList from './GamesList'

export const Details = () => {
  const [showTeam, setShowTeam] = useState(false)
  const [zoomIn, setZoomIn] = useState(false)

  const hoverOn = () => {
    setShowTeam(true)
    setZoomIn(true)
  }

  const hoverOut = () => {
    setShowTeam(false)
    setZoomIn(false)
  }

  return (
    <div className='max-w-full h-screen w-full'>
      <div className='flex justify-center items-center relative z-30'>
        <div
          id='dark-star'
          className='border-none rounded-3xl w-2/6 h-[400px] absolute left-52 
            flex flex-col justify-start text-white '
        >
          <h1 className='text-2xl font-semibold w-5/6 mt-8 ml-10'>
            Need Help Climbing?
          </h1>
          <h1 className='text-7xl w-5/6 font-bold mt-7 ml-10'>
            LET US DO <br /> THE WORK
          </h1>
          <p className='text-lg font-bold w-3/6 mt-8 ml-10'>
            Our game boosting services are designed to help you reach your
            gaming goals quickly and efficiently.
          </p>
          <div
            className='border-2 border-white rounded-3xl bg-gray-200 px-10 py-3 absolute 
            bottom-16 right-10 transition duration-300 hover:scale-105 hover:bg-transparent 
            cursor-pointer'
          >
            <p
              className='font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-r from-darkStar2 via-darkStar3 to-darkStar1'
            >
              JOIN NOW
            </p>
          </div>
        </div>
        <div
          id='dark-star'
          className='border-none rounded-3xl w-[25%] h-[500px] absolute right-52 -bottom-20
            flex justify-center items-center text-white '
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOut}
        >
          <div className='w-[98%] h-[98%] border-none rounded-3xl relative overflow-hidden'>
            <img
              alt='player'
              src={player}
              className={`border-none rounded-3xl w-full h-full  object-cover ${
                zoomIn && 'scale-110 '
              } duration-200`}
            />
            <div
              className={`flex justify-center items-center border-none rounded-3xl 
                bg-gradient-to-b from-gray-600 to-gray-900 opacity-70 w-full 
                h-full absolute top-0 ${!showTeam && 'hidden'} `}
            >
              <div
                className='border-2 border-white rounded-3xl bg-gray-200 text-black px-10 py-3 
                transition duration-300 hover:scale-105 hover:bg-transparent hover:text-white font-extrabold cursor-pointer'
              >
                <button className=''>MEET THE SQUAD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-black z-20 absolute'>
        <GamesList />
      </div>
    </div>
  )
}

export default Details
