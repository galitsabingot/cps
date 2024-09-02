import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-10 bg-black text-gray-300 px-16 text-white z-50'>
      <div className='flex'>
        <img src={Logo} alt="Logo image" style={{ width: '60px' }} />
        <h1 className="text-sm font-bold ml-5 uppercase mt-5 tracking-widest">Amarabelliana's Gowns and Events Stylist</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='mr-4 hover:text-[#ffd000]'>
          {isHomePage ? (
            <ScrollLink to="home" smooth={true} duration={500}><Link to="/">Home</Link></ScrollLink>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>
        <li className='mr-4 hover:text-[#ffd000]'>
          <Link to='/collections'>Collections</Link>
        </li>
        <li className='mr-4 hover:text-[#ffd000]'>
          {isHomePage ? (
            <ScrollLink to="about" smooth={true} duration={500}><Link to="/">About</Link></ScrollLink>
          ) : (
            <Link to="/?scrollTo=about">About</Link>
          )}
        </li>
        <li className='mr-4 hover:text-[#ffd000]'>
          {isHomePage ? (
            <ScrollLink to="contact" smooth={true} duration={500}><Link to="/">Contact</Link></ScrollLink>
          ) : (
            <Link to="/?scrollTo=contact">Contact</Link>
          )}
        </li>
        <li className='hover:text-[#ffd000]'>
          {isHomePage ? (
            <ScrollLink to="faqs" smooth={true} duration={500}><Link to="/">FAQs</Link></ScrollLink>
          ) : (
            <Link to="/?scrollTo=faqs">Faqs</Link>
          )}
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white'}>
        <ul>
          <li className='py-6 text-xl sm:text-3xl'>
            {isHomePage ? (
              <ScrollLink onClick={handleClick} to="home" smooth={true} duration={500}><Link to="/">Home</Link></ScrollLink>
            ) : (
              <Link to="/" onClick={handleClick}>Home</Link>
            )}
          </li>
          <li className='py-6 text-xl sm:text-3xl'>
            <Link to='/collections' onClick={handleClick}>Collections</Link>
          </li>
          <li className='py-6 text-xl sm:text-3xl'>
            {isHomePage ? (
              <ScrollLink onClick={handleClick} to="about" smooth={true} duration={500}><Link to="/">About</Link></ScrollLink>
            ) : (
              <Link to="/?scrollTo=about" onClick={handleClick}>About</Link>
            )}
          </li>
          <li className='py-6 text-xl sm:text-3xl'>
            {isHomePage ? (
              <ScrollLink onClick={handleClick} to="contact" smooth={true} duration={500}><Link to="/">Contact</Link></ScrollLink>
            ) : (
              <Link to="/?scrollTo=contact" onClick={handleClick}>Contact</Link>
            )}
          </li>
          <li className='py-6 text-xl sm:text-3xl'>
            {isHomePage ? (
              <ScrollLink onClick={handleClick} to="faqs" smooth={true} duration={500}><Link to="/">Faqs</Link></ScrollLink>
            ) : (
              <Link to="/?scrollTo=faqs" onClick={handleClick}>Faqs</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
