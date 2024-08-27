import React, { useState } from 'react';
import Aboutpicture from '../assets/about.webp';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div name='about' className='w-full h-screen bg-white'>
      <div className='flex flex-col justify-center items-center w-full h-full p-4'>
        <div className='max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20'>
          <div className='flex justify-center md:justify-end'>
            <img src={Aboutpicture} alt="About image" className='w-full md:w-3/4 lg:w-full' />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-[#ffd000] font-bold text-2xl sm:text-3xl md:text-5xl mb-6'>ABOUT US</h1>
            <p className='mb-6'>
              At Amarabelliana’s, you’ll find a diverse array of beautifully crafted attires. 
              Whether you need a stunning gown or a sophisticated suit, our 
              collection is designed to meet your style needs for any special event. 
              Our offerings include:
            </p>
            <p className='mb-4'>
              Join us discover the luxury of rental fashion with Amarabelliana’s Gowns and Events Stylist. 
              Let us help you create unforgettable memories with the perfect attire for your special events. 
              Visit our branches, explore our collection, and experience the elegance of Amarabelliana’s today.
            </p>
            <button onClick={handleOpenModal} className='mb-6 border-2 px-6 py-3 hover:bg-[#ffd000] hover:border-[#ffd000]'>READ MORE</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-[1200px] overflow-y-auto max-h-[90vh]'>
            <h2 className='text-3xl font-bold mb-4'>More About Us</h2>
            <p className='mb-4'>
              Gowns for Every Occasion: From elegant wedding gowns to glamorous prom dresses, our selection ensures you’ll find the perfect fit.
              Stylish Suits: High-quality suits tailored for formal events, ensuring you look your best.
              Personalized Styling Services: Our experienced stylists are here to help you select the ideal outfit, providing personalized advice and fashion consultations.
            </p>
            <h2 className='text-xl mb-4'>Our Journey</h2>
            <p className='mb-4'>
              Over the years, we have witnessed a growing demand for rental fashion. As our popularity has surged, so has our commitment to enhancing the customer experience. 
              Despite our boutique's reputation for well-made and high-quality attire, we continuously strive to overcome challenges related to personalization and garment fit. 
              Our goal is to ensure that each customer feels confident and satisfied with their rental choices.
            </p>
            <h2 className='text-xl mb-4'>Innovation and Future Vision</h2>
            <p className='mb-4'>
              To better serve our customers, we are partnering with STI College San Jose Del Monte to develop a cutting-edge rental system. This innovative platform will feature:

              AI-Powered Recommendations: Personalized attire suggestions based on your preferences.
              3D Mannequin Visualization: Customizable mannequins to help you visualize the fit and style of your chosen attire.
              Enhanced Communication: Automated FAQs and seamless interaction between customers and our team for efficient service.
              Commitment to Excellence
              We believe in providing exceptional service and ensuring our customers have an unforgettable experience. 
              Our new system will not only streamline our processes but also enhance the way you interact with our brand. 
              By embracing technology, we aim to mitigate garment damage, preserve the quality of our inventory, and offer you more options based on your unique preferences.
            </p>
            <button onClick={handleCloseModal} className='border-2 px-6 py-3 hover:bg-[#ffd000] hover:border-[#ffd000]'>CLOSE</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default About;
