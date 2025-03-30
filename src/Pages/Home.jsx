import HeroCarousel from '../Components/Carousel/HeroCarousel'
import CardWrapper from '../Components/Cards/CardWrapper'
import Banner from '../Components/Banner/Banner'
import About from '../Components/AboutUs/About.jsx'
import Approach from '../Components/Approach/Approach'
import TestimonialSlider from '../Components/Testimonials/TestimonialSlider'
import PartnerCarousel from '../Components/PartnerCarousel/PartnerCarousel'
import WhyChoose from '../Components/Services Wrapper/WhyChoose.jsx'

const Home = () => {
  return (
    <>
        <HeroCarousel/>
        <About/>
        <WhyChoose/>
        <CardWrapper/>
        <Banner/>
        <Approach/>
        <TestimonialSlider/>
        <PartnerCarousel/>
    </>
  )
}

export default Home;