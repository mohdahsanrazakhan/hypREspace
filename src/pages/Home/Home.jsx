import ContactUs from "../ContactUs/ContactUs"
import Mission from "../Mission/Mission"
import OurValues from "../OurValues/OurValues"

const Home = () => {
  return (
    <>
      <div id="mission">
        <Mission />
      </div>
      <div id="ourvalues">
        <OurValues />
      </div>
      <div id="contactus">
        <ContactUs />
      </div>
    </>
  )
}

export default Home