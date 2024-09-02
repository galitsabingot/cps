import React, { useState, useRef } from 'react';
import { auth, db } from '../pages/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showMissingIDError, setShowMissingIDError] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile.size > 5 * 1024 * 1024) {
      setShowError(true);
      setFile(null);
      return;
    }

    const fileType = selectedFile.type;
    if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
      setShowError(true);
      setFile(null);
      return;
    }

    setFile(URL.createObjectURL(selectedFile));
    setShowError(false);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setShowMissingIDError(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        suffix: formData.suffix,
        email: formData.email,
        phoneNumber: `+63${formData.phoneNumber}`,
        role: 'user',
      });

      console.log('User created:', user);
      setShowModal(true);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowError(false);
    setShowMissingIDError(false);

    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      suffix: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    });
    setFile(null);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <Navbar />
      </div>

      <div className="pt-16 min-h-screen flex items-center justify-center bg-white text-black">
        <div className="p-8 rounded-lg bg-gray-200 flex">
          <div className="mr-8">
            <h2 className="text-3xl font-bold ml-6 mb-4">REGISTER</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">
                  <span className="text-red-500 text-lg mr-1">*</span> First name:
                </label>
                <input className="w-full p-3 rounded border border-gray-300 bg-white" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Middle name:</label>
                <input className="w-full p-3 rounded border border-gray-300 bg-white" type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  <span className="text-red-500 text-lg mr-1">*</span> Last name:
                </label>
                <input className="w-full p-3 rounded border border-gray-300 bg-white" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Suffix:</label>
                <input className="w-full p-3 rounded border border-gray-300 bg-white" type="text" name="suffix" value={formData.suffix} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  <span className="text-red-500 text-lg mr-1">*</span> Email Address:
                </label>
                <input className="w-full p-3 rounded border border-gray-300 bg-white" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  <span className="text-red-500 text-lg mr-1">*</span> Phone Number:
                </label>
                <div className="flex">
                  <span className="p-3 bg-gray-300 rounded-l border border-gray-300">+63</span>
                  <input className="w-full p-3 rounded-r border border-gray-300 bg-white" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  <span className="text-red-500 text-lg mr-1">*</span> Password:
                </label>
                <input className="w-full p-3 rounded border border-gray-300 bg-white" type="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  <span className="text-red-500 text-lg mr-1">*</span> Confirm Password:
                </label>
                <input className="w-full p-3 rounded border border-gray-300 bg-white" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              </div>
              <button type="submit" className="w-full p-3 bg-[#ffd000] rounded mb-4">SIGN UP</button>
            </form>
          </div>
          <div>
            <div className="ml-20 mt-14 w-3/4 h-56 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              {file ? (
                <img src={file} alt="ID Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-2xl font-bold">+</span>
              )}
            </div>
            <div className="text-sm mb-4">
              <p className='ml-14'>Upload Instructions:</p>
              <ol className="list-decimal list-inside mx-10">
                <li>Ensure that your ID is valid and not expired.</li>
                <li>The ID must be clear and readable. Blurry or obscured images will not be accepted.</li>
                <li>The entire ID should be visible in the photo (all four corners must be shown).</li>
                <li>Accepted file formats: JPEG, PNG.</li>
                <li>Maximum file size: 5MB.</li>
              </ol>
            </div>

            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
            />
            <button onClick={handleUploadClick} className="ml-36 w-96 p-3 bg-[#ffd000] rounded mb-4 text-white">
              Upload ID
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-bold mb-4">Registration Successful!</h3>
            <p className="mb-4">Your account has been successfully registered. You can now log in.</p>
            <button onClick={closeModal} className="p-2 bg-[#ffd000] rounded">Close</button>
          </div>
        </div>
      )}

      {showError && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-bold mb-4">File Error</h3>
            <p className="mb-4">The image is either too large or not in a supported format. Please upload a JPEG or PNG image under 5MB.</p>
            <button onClick={() => setShowError(false)} className="p-2 bg-[#ffd000] rounded">Close</button>
          </div>
        </div>
      )}

      {showMissingIDError && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-bold mb-4">ID Upload Required</h3>
            <p className="mb-4">Please upload a valid ID to complete your registration.</p>
            <button onClick={() => setShowMissingIDError(false)} className="p-2 bg-[#ffd000] rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
