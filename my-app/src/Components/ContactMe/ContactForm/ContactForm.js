import React from 'react'
import './ContactForm.css'
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // POST the form data to the backend server
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    // <div className='contact-form-content'>
        
    //     <form>
    //     <div className='name-container'>
    //         <input type='text' name='firstname' placeholder='First Name'/>
    //         <input type='text' name='lastname' placeholder='Last Name'/>
    //         </div>
            
    //         <input type='text' name='email' placeholder='Email'/>
    //         <textarea type='text' name='message' placeholder='Message' rows={3}/>

    //         <button>SEND</button>
    //     </form>
        
    // </div>
<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
