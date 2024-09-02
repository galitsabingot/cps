import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import background from '../assets/test.png';
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search) {
      const section = new URLSearchParams(location.search).get('scrollTo');
      if (section) {
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      }
    }
  }, [location]);

  const handleLoginClick = () => {
    navigate('/selection');
  };

  const handleSignUpClick = () => {
    navigate('/signup');  
  };

  return (
    <div
      name='home'
      className='w-full h-screen bg-fixed'
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center'>
        <h2 className='text-black font-bold text-xl sm:text-3xl text-center mb-10'>
          YOUR ONE-STOP SHOP FOR ALL YOUR RENTAL NEEDS
        </h2>
        <h1 className='text-4xl sm:text-7xl font-bold text-black py-5 text-center mb-10'>
          Tailored Rentals & Custom Creations: Your Perfect Fit Awaits
        </h1>
        <p className='text-white max-w-[1000px] pb-10 text-center'>
          From weddings to parties, we offer a wide range of high-quality rental 
          items to elevate any event. Browse through our collection. Explore our catalog today and let us help you 
          make your next event unforgettable!
        </p>
        <div>
          <button
            className='text-black border-2 px-14 py-3 my-2 mr-12 hover:bg-[#ffd000] hover:border-[#ffd000] rounded-lg hover:text-black'
            onClick={handleSignUpClick}
          >
            REGISTER
          </button>
          <button
            className='text-black border-2 px-16 py-3 my-2 hover:bg-[#ffd000] hover:border-[#ffd000] rounded-lg hover:text-black'
            onClick={handleLoginClick}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
