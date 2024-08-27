import React, { useState } from 'react';
import { AiOutlineContacts, AiOutlineFacebook, AiOutlineEnvironment, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "de39d4ab-36a0-4aee-9575-37cb14a25720");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonColor: "#ffd000"
      });

      // Reset the form
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div name='contact' className='w-full min:h-screen bg-black py-36'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-2 gap-20'>
          <div>
            <h1 className='text-white font-bold text-3xl mb-3 text-center'>CONTACT US</h1>
            <p className='text-white text-sm mb-4 text-center'>Feel free to get in touch with us through any of the following methods:</p>

            <div className='flex items-center mb-2 ml-9'>
              <AiOutlineContacts size={30} color='ffd000' className='mr-3'/>
              <p className='font-bold text-white text-sm'>CALL US</p>
            </div>
            <p className='text-[gray] mb-1 text-sm ml-9'>TM: +63 955 260 9144</p>
            <p className='text-[gray] mb-1 text-sm ml-9'>SMART: +63 961 748 1435</p>
            <p className='text-[gray] mb-6 text-sm ml-9'>LANDLINE: 443068414</p>
              
            <div className='flex items-center mb-3 ml-9'>
              <AiOutlineMail size={30} color='ffd000' className='mr-3'/>
              <p className='font-bold text-white text-sm'>EMAIL</p>
            </div>
            <p className='text-[gray] mb-6 text-sm ml-9'>jhun.lalican@gmail.com</p>

            <div className='flex items-center mb-3 ml-9'>
              <AiOutlineFacebook size={30} color='ffd000' className='mr-3'/>
              <p className='font-bold text-white text-sm'>SOCIAL MEDIA</p>
            </div>
            <p className='text-[gray] mb-1 text-sm ml-9'>Amarabelliana's Gown Rental</p>
            <p className='text-[gray] mb-1 text-sm ml-9'>Amarabelliana's Gown and Event</p>
            <p className='text-[gray] mb-6 text-sm ml-9'>Amarah's Gown for sale</p>

            <div className='flex items-center mb-3 ml-9'>
              <AiOutlineEnvironment size={30} color='ffd000' className='mr-3'/>
              <p className='font-bold text-white text-sm'>LOCATION/BRANCHES</p>
            </div>
            <p className='text-[gray] mb-2 text-sm ml-9'>B6 Lot 27 P1 Northgate Park Exclusive Subdivision barangay Santo Cristo</p>
            <p className='text-[gray] mb-6 text-sm ml-9'>B3 Lot 6 Pillar Village HOA Barangay Santo Cristo</p>

            <div className='flex items-center mb-3 ml-9'>
              <AiOutlineClockCircle size={30} color='ffd000' className='mr-3'/>
              <p className='font-bold text-white text-sm'>BUSINESS HOURS</p>
            </div>
            <p className='text-[gray] mb-1 text-sm ml-9'>Monday to Saturday - (10:00am to 8:00pm)</p>
            <p className='text-[gray] text-sm ml-9'>Sunday - (1:00pm to 8:00pm)</p>
          </div>

          <section className='contact ml-5'>
            <form onSubmit={onSubmit}>
              <h2 className='uppercase'>Contact Form</h2>
              <div className='input-box'>
                <label>Full Name</label>
                <input 
                  type='text' 
                  className='field' 
                  placeholder='Enter your name' 
                  name='name' 
                  value={formState.name} 
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className='input-box'>
                <label>Email Address</label>
                <input 
                  type='email' 
                  className='field' 
                  placeholder='Enter your email' 
                  name='email' 
                  value={formState.email} 
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className='input-box'>
                <label>Your Message</label>
                <textarea 
                  name='message' 
                  className='field mess' 
                  placeholder='Enter your message' 
                  value={formState.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              <button type='submit'>Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
export default Contact;
