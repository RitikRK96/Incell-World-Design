import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contactus.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx9GQlmjcXhZjNSTGfSB54rpBFo4jR34gt3JwKHE_ewjNsbAtZl3-179Cz8QQFNum2DGA/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create URLSearchParams instead of JSON
    const formDataToSend = new URLSearchParams();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    fetch(scriptURL, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors",
    })
      .then(() => {
        // Show toast notification
        toast.success(
          "✅ Form Submitted successfully! 👩‍💻 Our team will reach to you shortly 😊",
          {
            position: "bottom-left",
            autoClose: 3000,
          }
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error!", error.message);
        toast.error("❌ Error while sending message...", {
          position: "bottom-left",
          autoClose: 3000,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Have questions? Our team is here to help. Contact us today!
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <h3>
                <span className="icon">📍</span> Location:
              </h3>
              <p>
                Incell 1 Nicholson Walk, Nicholson Shopping Centre, Maidenhead,
                Berkshire, SL6 1LB
              </p>
            </div>

            <div className="info-item">
              <h3>
                <span className="icon">📧</span> Email:
              </h3>
              <p>
                <a href="mailto:vibraenergyuk@gmail.com">
                vibraenergyuk@gmail.com
                </a>
              </p>
            </div>

            <div className="info-item">
              <h3>
                <span className="icon">📞</span> Call:
              </h3>
              <p>
                <a href="tel:016287890952">01628 789 0952</a>
              </p>
            </div>

            <div className="map-container">
              <iframe
                title="Google Map"
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.51762585585!2d-0.724315123379048!3d51.5220651718166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487662cfc29d0b31%3A0x727550040c990a5e!2sNicholsons%20Shopping%20Centre!5e0!3m2!1sen!2sin!4v1743599033040!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

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

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Contactus;
