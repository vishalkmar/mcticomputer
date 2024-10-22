import React, { useState } from 'react';
import axios from 'axios';
import OwnerHeader from './OwnerHeader';

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      alert("Please enter a student email before uploading the image.");
      return;
    }
  
    const formData = new FormData();
    formData.append('image', image);
    formData.append('email', email);  // Send email instead of studentId
  
    try {
      const res = await axios.post('http://localhost:8000/api/user/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded:', res.data);
      alert("Image Uploaded Successfully");
    } catch (err) {
      console.error('Upload error:', err);
      alert("Error in Uploading Image: " + (err.response?.data?.error || "Unknown error"));
    }
  };
  
  return (
    <>
      <OwnerHeader />
      <div className='container-fluid bg-black' style={{ height: "100vh" }}>
        <div className='container'>
          <h2 className='text-center text-white py-5'>Upload Student Certificate</h2>
          <div className='row'>
            <div className='col-md-6 col-12 mx-auto'>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                   <label className='text-white py-1'>Enter Student Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    placeholder="Enter Student Email" 
                    className='form-control' 
                    required 
                  />
                </div>
                <div className='form-group my-3'>
                  <label className='text-white py-1'>Upload Certificate</label>
                  <input 
                    type="file" 
                    onChange={handleFileChange} 
                    accept="image/*" 
                    className='form-control' 
                    required 
                  />
                  <div className='form-control w-25 my-3 mx-auto'>
                    <button type="submit" className='btn btn-danger text-white'>Upload Image</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUploadForm;
