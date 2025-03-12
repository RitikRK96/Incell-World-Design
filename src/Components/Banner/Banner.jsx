import "./Banner.css";
import background from "../../assets/banner-background.jpg";

const Banner = () => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="banner-content">
        <h1>Our Story</h1>
        <p>
          Since 2008 we have been helping clients to understand and navigate their way through 
          building regulations, establishing ourselves as experts in carrying out energy performance 
          certificates, sustainability improvements and risk management.
        </p>
        <p>
          We are regulated by the RICS, and also hold nationally respected accreditations through 
          Elmhurst and Trust Mark registration, ensuring our clients receive professional and 
          knowledgeable services on every visit.
        </p>
        <p>
          From a one-person operation at a home office to a team of certified RICS surveyors, 
          Retrofit Assessors, Retrofit Coordinators, energy assessors, and property photographers, 
          we provide a cost-effective and seamless service across the UK.
        </p>
      </div>
    </div>
  );
};

export default Banner;
