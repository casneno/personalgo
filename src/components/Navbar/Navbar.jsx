import { React, useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaInstagram } from 'react-icons/fa';
/* import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs' */
import { Link } from 'react-scroll'
import logo_mini from "../../images/logo_mini.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primaryBg text-primaryText z-50'>
      {/* Logo */}
      <div className="relative top-0 left-0">
        <img src={logo_mini} alt="Your Logo" className="w-32 h-auto" />
      </div>

      {/* desktop menu */}
      <ul className='hidden md:flex space-x-4'>
        {['home', 'sobre', 'inscreva-se'].map((item) => (
          <li key={item}>
            <Link to={item} smooth={true} duration={500} className='hover:text-accent1'>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-50'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primaryBg flex flex-col justify-center items-center text-primaryText z-40'}>
        {['home', 'sobre', 'inscreva-se'].map((item) => (
          <li key={item} className='py-6 text-4xl'>
            <Link to={item} smooth={true} duration={500} onClick={handleClick}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons - Always Visible */}
      <div className='absolute bottom-8 left-0 right-0 flex justify-center space-x-6 md:hidden'>
        <a className='text-blue-700' href="https://www.linkedin.com/company/personalgoapp/about/" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a className='text-pink-600' href="https://www.instagram.com/personalgo.app/" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>
        {/* <a className='text-primaryText' href="/">
          <HiOutlineMail size={30} />
        </a> */}
      </div>

      {/* Desktop Social icons */}
      <div className='hidden md:flex fixed flex-column top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-tr from-yellow-200  via-pink-600 to-purple-600'>
            <a className='flex justify-between items-center w-full text-primaryText' href="https://www.instagram.com/personalgo.app/" target="_blank" rel="noreferrer">
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a className='flex justify-between items-center w-full text-primaryText' href="https://www.linkedin.com/company/personalgoapp/about/" target="_blank" rel="noreferrer">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-800'>
            <a className='flex justify-between items-center w-full text-primaryText' href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;