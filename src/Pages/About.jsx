import React from "react";
import Aboutus from "../Components/AboutUs/About.jsx";
import WhyChoose from "../Components/Services Wrapper/WhyChoose.jsx";
import WhyReachOut from "../Components/Services Wrapper/WhyReachOut.jsx";
import { Helmet } from "react-helmet"; // SEO Optimization

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | INCELL Build & Design LTD.</title>
        <meta
          name="description"
          content="We are a team of passionate professionals dedicated to delivering innovative and effective solutions to help businesses thrive. Our mission is to create seamless experiences that drive growth and success. With a deep understanding of technology and a commitment to excellence, we have successfully helped numerous clients enhance their digital presence and achieve their goals."
        />
      </Helmet>

        <br/> <br/> <br/> 
        <Aboutus />
        <WhyChoose />
        <WhyReachOut />
    </>
  );
};

export default About;
