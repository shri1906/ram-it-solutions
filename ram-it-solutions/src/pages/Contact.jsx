// ContactUs.js

import { useState } from "react";
import { Link } from "react-router-dom";
// import emailjs from 'emailjs';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     'your_service_id',    // Replace with your EmailJS service ID
    //     'your_template_id',    // Replace with your EmailJS template ID
    //     e.target,              // This is the form element
    //     'your_user_id'         // Replace with your EmailJS user ID
    //   )
    //   .then(
    //     (result) => {
    //       setStatus('Message sent successfully!');
    //       setFormData({ name: '', email: '', message: '' }); // Clear the form
    //     },
    //     (error) => {
    //       setStatus('Error sending message, please try again later.');
    //     }
    //   );
  };

  return (
    <div className="container my-5">
      <div className="row mb-4">
        {/* Contact Information Section */}
        <div className="col-md-6 mb-4">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us:</p>
          <img src="./logo.png" alt="logo" height={'150px'} />
          <ul className="list-unstyled">
            <li>
              <i className="fa-solid fa-envelope me-2"></i>
              <strong>Email:</strong>{" "}
              <Link
                className="text-decoration-none"
                to="mailto:shivammaurya7310@gmail.com"
              >
                shivammaurya7310@gmail.com
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-mobile-retro me-2"></i>
              <strong>Phone:</strong> +91-7310941087
            </li>
            <li>
              <i className="fa-solid fa-location-dot me-2"></i>
              <strong>Address:</strong> 120, Karanpur, Near Survey Chowk
              <br />
              Dehradun - 248001, India
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-6">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          {status && <p className="mt-3 text-success">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
