import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { BiPhone, BiCopyright } from 'react-icons/bi';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='bg-black py-10 px-4 lg:px-24 grid grid-cols-1 lg:grid-cols-3 text-white gap-8 text-center lg:text-left'>
      <div className='my-5'>
        <div className='px-7 flex justify-center lg:justify-start'>
          <img src={Logo} alt="Logo image" style={{ width: '60px' }} />
          <h1 className='font-bold py-4 px-6 uppercase tracking-widest italic'>Amarabelliana.</h1>
        </div>
        <p className='py-4 px-8 uppercase font-semibold text-[gray] text-sm'>
          Tailored Rentals & Custom Creations: Your Perfect Fit Awaits.
        </p>
      </div>

      <div className='px-0 lg:px-52 py-4'>
        <h1 className='font-bold uppercase tracking-widest w-full lg:w-28 text-sm text-[#ffd000]'>follow us</h1>
        <div className='flex justify-center lg:justify-start items-center w-full lg:w-72 pt-3 cursor-pointer' onClick={() => handleRedirect('https://www.facebook.com/profile.php?id=100064026936333')}>
          <FaFacebookSquare size={20} />
          <p className='px-4 text-sm text-[gray]'>Amarabelliana's Gown and Event</p>
        </div>
      </div>

      <div className='px-0 lg:px-52 py-4'>
        <h1 className='font-bold uppercase tracking-widest w-full lg:w-28 text-sm text-[#ffd000]'>Contact us</h1>
        <div className='flex justify-center lg:justify-start items-center w-full lg:w-72 pt-4'>
          <BiPhone size={20} />
          <p className='px-4 text-sm text-[gray]'>TM: +63 955 260 9144</p>
        </div>
        <div className='flex justify-center lg:justify-start items-center w-full lg:w-72 pt-3'>
          <BiPhone size={20} />
          <p className='px-4 text-sm text-[gray]'>SMART: +63 961 748 1435</p>
        </div>
        <div className='flex justify-center lg:justify-start items-center w-full lg:w-72 pt-3'>
          <BiPhone size={20} />
          <p className='px-4 text-sm text-[gray]'>LANDLINE: 443068414</p>
        </div>
      </div>

      <div className='lg:col-span-3 border-b border-[gray] mt-8 lg:mt-0'></div>

      <div className='py-4 flex justify-center lg:justify-start items-center'>
        <BiCopyright className='text-[gray]' size={15} />
        <p className='italic text-sm pl-2 text-[gray]'>2024 Amarabelliana's gowns and events. All rights reserved.</p>
      </div>

      <div></div>

      <div className='py-4 flex justify-center lg:justify-start items-center px-0 lg:px-52 text-sm text-[gray] italic'>
        <p className='hover:cursor-pointer hover:text-gray-400' onClick={handleModalOpen}>Terms of Service</p>
      </div>

      {showModal && (
        <div className='fixed inset-0 flex text-left items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-[1200px] overflow-y-auto max-h-[90vh]'>
            <h2 className='text-3xl font-bold mb-4'>Terms of Service</h2>
            <p className='mb-4'>
              - The rental period is for (3) three days ONLY for non-wedding gowns and
              (5) five days ONLY for wedding gown, including the day when it was taken.
            </p>
            <p className='mb-4'>
              - Late returns will be charged a penalty of specific amount per day basis. This charge will continue until the gown is returned.<br />
              • Five Hundred Pesos (P500.00) for Wedding Gown<br />
              • Four Hundred Pesos (P400.00) for Long Gown<br />
              • Three Hundred Pesos (P300.00) for Cocktail Dress and others
            </p>
            <p className='mb-4'>
              • A reservation fee equivalent to 50% of the rental fee is required in order to reserve the garment.<br />
              The reservation fee is non-refundable and will be forfeited in favor
              of Amarabelliana if the rental is cancelled or not fulfilled.
            </p>
            <p className='mb-4'>
              • Customers are required to deposit (1) one valid ID to Amarabelliana and will be<br />
              collected upon returning of the rented garment on the specific deadline given.
            </p>
            <p className='mb-4'>
              • Rented garments must be returned in the condition they were received.  ANY RIPS, TEARS, or DAMAGE<br />
              to the rented garment will result in a hold of the ID until the rented garment is repaired at the customer’s expense.<br />
              If the damage is severe and the garment cannot be cleaned or repaired to its original state,<br />
              the customer is required to pay the full retail price of the rented garment.
            </p>
            <p className='mb-4'>
              • The payment is considered NON-REFUNDABLE unless the Amarabelliana has given their approval upon the request.
            </p>
            <button className='bg-black text-white px-4 py-2 rounded' onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Footer;
