import HeroCarousel from '../Components/Carousel/HeroCarousel'
import CardWrapper from '../Components/Cards/CardWrapper'
import Banner from '../Components/Banner/Banner'
import About from '../Components/AboutUs/About.jsx'
import Approach from '../Components/Approach/Approach'
import TestimonialSlider from '../Components/Testimonials/TestimonialSlider'
import PartnerCarousel from '../Components/PartnerCarousel/PartnerCarousel'
import WhyChoose from '../Components/Services Wrapper/WhyChoose.jsx'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>INCELL Build & Design LTD.</title>
        <meta 
          name="description" 
          content="Welcome to INCELL Build & Design LTD. We provide expert retrofit design, sustainability solutions, and innovative building services in the UK." 
        />
        <meta 
          name="keywords" 
          content="retrofit design, building sustainability, energy efficiency, property solutions, construction services, UK building solutions" 
        />
        <meta name="author" content="INCELL Build & Design LTD." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home | INCELL Build & Design LTD." />
        <meta 
          property="og:description" 
          content="Discover expert retrofit design and sustainability solutions with INCELL Build & Design LTD." 
        />
        <meta property="og:url" content="https://www.incellbuilddesign.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.incellbuilddesign.co.uk/assets/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | INCELL Build & Design LTD." />
        <meta 
          name="twitter:description" 
          content="Leading experts in retrofit design, energy efficiency, and sustainability solutions in the UK." 
        />
        <meta name="twitter:image" content="https://www.incellbuilddesign.co.uk/assets/og-image.jpg" />
        <link rel="canonical" href="https://www.incellbuilddesign.co.uk/" />
      </Helmet>

      <HeroCarousel />
      <About />
      <WhyChoose />
      <CardWrapper />
      <Banner />
      <Approach />
      <TestimonialSlider />
      <PartnerCarousel />
    </>
  );
}

export default Home;
