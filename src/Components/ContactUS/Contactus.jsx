// src/components/Contactus.js
import React, { useState } from "react";
import "./Contactus.css"; // Importing the external CSS

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Google Apps Script Web App URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyKjilANo9j2Hgemdt0PXzDuR0m0I8NFxH3n1qDuLpzFjGT69rsgyao0pW8OLkW2iAB/exec";

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    // Send form data to Google Sheets
    fetch(scriptURL, {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully! ✅");
          console.log("Form Submitted:", formData);

          // Reset form after submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          alert("Failed to send message. ❌ Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("Error while sending message. ❌");
      });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          If you have any queries or require assistance, please don't hesitate
          to get in touch with us. Our dedicated team is here to help you with
          any questions.
        </p>

        <div className="contact-grid">
          {/* Left Section: Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <h3>
                <span className="icon">📍</span> Location:
              </h3>
              <p>
                Unit 3 Grand Union Enterprise Bridge Road Southall Middlesex UB2
                4EX
              </p>
            </div>

            <div className="info-item">
              <h3>
                <span className="icon">📧</span> Email:
              </h3>
              <p>contact@vibraenergy.co.uk</p>
            </div>

            <div className="info-item">
              <h3>
                <span className="icon">📞</span> Call:
              </h3>
              <p>0208 843 5173</p>
            </div>

            {/* Google Map */}
            <div className="map-container">
              <iframe
                title="Google Map"
                className="google-map"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7cmU-JpLdkgRXrt14_O3ygE&key=YOUR_GOOGLE_MAPS_API_KEY"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
