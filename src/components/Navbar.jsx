import Logo from "../assets/Logo.png";
import Jhin from "../assets/jhin.jpg";
import { AiFillBug } from "react-icons/ai";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 25px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 45px 40px)",
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 400,
      damping: 40,
    },
  },
};

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
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const links = [
    { id: 1, title: "HOME", icon: false },
    { id: 2, title: "ABOUT", icon: false },
    { id: 3, title: "CONTACT US", icon: false },
    { id: 4, title: "BUG REPORT", icon: true },
  ];

  return (
    <nav
      className="
    xs:flex
    lg:sticky z-50"
    >
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div
          className="
          xs:w-full
          lg:w-3/6
          2xl:w-2/6
          3xl:w-1/5
          fixed top-0 left-0 bottom-0 w-1/5 bg-gray-900"
          variants={sidebar}
        />
        <motion.ul
          variants={variants}
          className={`${!isOpen && "hidden"}
          xs:w-full
          lg:w-3/6
          2xl:w-2/6
          3xl:w-1/5
          fixed w-1/5 h-5/6 flex flex-col justify-between items-center`}
        >
          <div
            className="
          xs:mt-14
          3xl:mt-28
          w-full flex flex-col justify-center items-center mt-28"
          >
            {links.map((link) => (
              <motion.li
                key={link.id}
                className="w-[80%] flex justify-center 
                 text-white font-extrabold text-2xl my-8"
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer flex justify-between items-center gap-2"
                >
                  {link.title}
                  {link.icon && <AiFillBug />}
                </motion.div>
              </motion.li>
            ))}
          </div>
          <div
            className="w-[80%] mb-10 mt-10
                 text-gray-800 font-extrabold text-2xl cursor-pointer"
          >
            <motion.li
              className="
              xs:-mt-10
              3xl:mt-28
              flex justify-center"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
            >
              <img alt="logo" src={Logo} />
            </motion.li>
          </div>
        </motion.ul>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </nav>
  );
};

export default Navbar;
