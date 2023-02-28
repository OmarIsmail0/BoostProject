import { useState } from 'react'
import Logo from '../assets/Logo.png'
import Jhin from '../assets/jhin.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const color = 'from-[#232E58] via-[#420182] to-[#903E76]'
  const links = [
    { id: 1, text: 'HOME' },
    { id: 2, text: 'ABOUT' },
    { id: 3, text: 'CONTACT US' },
    { id: 4, text: 'BUG REPORT' },
  ]

  return (
    <nav className='sticky'>
      <div className={`flex justify-between items-center z-30 w-full`}>
        <div className='flex justify-between items-center mx-auto w-5/6 h-32'>
          <div className='w-[300px] h-[200px] '>
            <img alt='logo' src={Logo} />
          </div>
          <motion.div className='text-white text-3xl hover:scale-125 transition duration-200 cursor-pointer'>
            <AiOutlineMenu onClick={() => setIsMenuToggled(true)} />
          </motion.div>
        </div>
      </div>
      {/* <div className={`flex justify-between items-center z-30 w-full`}>
        <img alt='jhin' src={Jhin} className='w-full h-full object-cover' />
      </div> */}

      {isMenuToggled && (
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`fixed flex flex-col justify-start items-center right-0 bottom-0 
          z-40 h-full w-[25%] bg-gray-200 drop-shadow-xl`}
        >
          {/* Close Icon */}
          <div className='flex justify-between p-12 my-20'>
            <div
              className={`border-2 border-black rounded-full text-black text-3xl p-4 
              hover:border-transparent hover:bg-gradient-to-r from-[#170140] to-[#220161] hover:text-gray-200
              hover:scale-125 transition duration-200 cursor-pointer`}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <AiOutlineClose />
            </div>
          </div>
          {/* Menu Items */}
          <div className=' flex flex-col justify-between items-center gap-10 text-2xl'>
            {links.map((link) => (
              <div
                key={link.id}
                className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#170140] to-[#220161] 
                hover:scale-125 transition duration-200 cursor-pointer`}
              >
                <p className=''>{link.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
