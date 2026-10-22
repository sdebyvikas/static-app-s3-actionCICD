import { useState } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiMoon, FiSun } from 'react-icons/fi'

const navItems = ['about', 'skills', 'experience', 'projects', 'contact']

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold gradient-text cursor-pointer">
          Vikas Kumar
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer capitalize hover:text-blue-400 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">

          {/* Dark Light Mode Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:bg-white/10 transition duration-300 flex items-center justify-center text-xl"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 bg-[#0b1120] py-6 border-t border-gray-200 dark:border-white/10">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer capitalize text-gray-700 dark:text-gray-300 hover:text-blue-400 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar