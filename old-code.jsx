import React from "react";
import reactLogo from "../assets/react.svg";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  return (
    <nav>
      <div className="bg-transparent shadow-2xl p-7">
        <div className="flex justify-between items-center mx-auto pl-4 pr-4">
          <div className="hover:scale-150 transition duration-100 cursor-pointer">
            <AiOutlineMenu onClick={() => setIsMenuToggle(true)} />
          </div>
          <div>
            <img src={reactLogo} alt="logo" />
          </div>
          <div>log/reg</div>src/conmponents/Navbar.jsx
        </div>
      </div>
      {isMenuToggle && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="fixed top-0 h-full left-0 w-2/6 bg-white z-40 "
        >
          <div className="flex justify-center">
            <button
              className="fixed bottom-0 mb-10 border border-none 
            rounded-full p-2 bg-gray-200 hover:scale-125 transition 
            duration-100 cursor-pointer"
              onClick={() => setIsMenuToggle(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
