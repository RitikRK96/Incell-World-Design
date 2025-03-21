import HeroCarousel from '../Components/Carousel/HeroCarousel'
import CardWrapper from '../Components/Cards/CardWrapper'
import Banner from '../Components/Banner/Banner'
import Approach from '../Components/Approach/Approach'
import TestimonialSlider from '../Components/Testimonials/TestimonialSlider'
import PartnerCarousel from '../Components/PartnerCarousel/PartnerCarousel'

const Home = () => {
  return (
    <>
        <HeroCarousel/>
        <CardWrapper/>
        <Banner/>
        <Approach/>
        <TestimonialSlider/>
        <PartnerCarousel/>
    </>
  )
}

export default Home;