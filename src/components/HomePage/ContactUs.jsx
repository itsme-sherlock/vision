import React, { useState } from 'react';
import axios from 'axios';
// import Button from '../Button/Button';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    console.log('pressed')
    e.preventDefault();
    try {
      const response = await axios.post('https://script.google.com/macros/s/AKfycby9OKD12Iu5xeKR_jEruRC_dzlkB4bKG_2b-Pe1SW_skjUkp3Xke-pQVkrALwH1lLLM5Q/exec', formData);
      console.log(response.data);
      // Optionally, you can reset the form fields after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center items-center flex-col'>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
