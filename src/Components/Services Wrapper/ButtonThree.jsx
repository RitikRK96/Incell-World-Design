import React from 'react'

const ButtonThree = () => {
  return (
    <>
        <div className="incell-bs-btn-container">
          <a
            href="/contact"
            className="incell-bs-btn incell-bs-enquire-btn"
            data-aos="fade-right"
          >
            ENQUIRE NOW
          </a>
          <a
            href="tel:+441234567890"
            className="incell-bs-btn incell-bs-call-btn"
            data-aos="fade-up"
          >
            CALL US
          </a>
          <a
            href="https://wa.me/441234567890"
            className="incell-bs-btn incell-bs-whatsapp-btn"
            data-aos="fade-left"
          >
            WHATSAPP
          </a>
        </div>
    </>
  )
}

export default ButtonThree