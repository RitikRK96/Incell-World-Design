import "./About.css";
import aboutImg from "../../assets/banner1.webp";

const About = () => {
  return (
    <section className="about">
      <div className="about-content" data-aos= "fade-right">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          We are a team of passionate professionals dedicated to delivering innovative and effective solutions to help businesses thrive. 
          Our mission is to create seamless experiences that drive growth and success.
        </p>
        <p className="about-description">
          With a deep understanding of technology and a commitment to excellence, we have successfully helped numerous clients 
          enhance their digital presence and achieve their goals.
        </p> 
        <a href="/contact" className="btn btn-primary">
          Contact Us
        </a>
      </div>
      <div className="about-image" data-aos= "fade-left">
        <img src={aboutImg} alt="About Us" />
      </div>
    </section>
  );
};

export default About;
