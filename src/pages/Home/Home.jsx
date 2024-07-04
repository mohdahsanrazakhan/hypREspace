import ContactUs from "../ContactUs/ContactUs"
import Mission from "../Mission/Mission"
import OurValues from "../OurValues/OurValues"
import Partners from "../Partners/Partners"
import Hero from "../../components/Hero/Hero"

const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="ourvalues">
        <OurValues />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="contactus">
        <ContactUs />
      </div>
    </>
  )
}

export default Home