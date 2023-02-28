import React from 'react'
import reactLogo from '../assets/react.svg'

import { motion, useCycle } from 'framer-motion'
import { MenuToggle } from './MenuToggle'

import { AiFillBug } from 'react-icons/ai'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 25px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 25px 40px)',
    transition: {
      type: 'spring',
      delay: 0.5,
      stiffness: 400,
      damping: 40,
    },
  },
}

const variants = {
  open: {
    y: 10,
    opacity: 1,
    transition: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      y: { stiffness: 1000 },
    },
  },
}
const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const links = [
    { id: 1, title: 'UNRANKED ACCOUNTS' },
    { id: 2, title: 'BOOSTING' },
    { id: 3, title: 'CONTACT US' },
  ]
  return (
    <nav>
      <div className='bg-transparent shadow-2xl p-7'>
        <div className='flex justify-between items-center mx-auto px-4'>
          <div className='hover:scale-150 transition duration-100 cursor-pointer'></div>

          <div>
            <img src={reactLogo} alt='logo' />
          </div>
          <div>log/reg</div>
        </div>
      </div>
      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.div
          className='fixed top-0 left-0 bottom-0 w-1/5 bg-gray-300'
          variants={sidebar}
        />
        <motion.ul
          variants={variants}
          className='fixed w-1/5 h-5/6 flex flex-col justify-between items-center'
        >
          <div className='w-full flex flex-col justify-center items-center'>
            {links.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                className='w-[80%] flex justify-center mb-10 mt-10
                 text-gray-800 font-extrabold text-2xl cursor-pointer'
              >
                {link.title}
              </motion.li>
            ))}
          </div>
          <div
            className='w-[80%] mb-10 mt-10
                 text-gray-800 font-extrabold text-2xl cursor-pointer'
          >
            <motion.li
              className=' flex justify-center'
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillBug style={{ fontSize: '30px' }} /> BUG REPORT
            </motion.li>
          </div>
        </motion.ul>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </nav>
  )
}

export default Navbar
// .background {
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   width: 300px;
//   background: #fff;
// }
