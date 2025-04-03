import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowPopup(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="cookie-container">
      <h2 className="cookie-title">Cookies Consent</h2>
      <p className="cookie-text">
      This website use cookies to help you have a superior and more relevant browsing experience on the website.
      </p>
      <a href="/contact" className="cookie-link">Contact Us...</a>
      <div className="cookie-buttons">
        <button onClick={handleAccept} className="cookie-btn accept-btn">Accept</button>
        <button onClick={handleReject} className="cookie-btn decline-btn">Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
