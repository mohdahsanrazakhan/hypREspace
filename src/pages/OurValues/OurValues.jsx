import ValueCard from "../../components/ValueCard/ValueCard"
import delightOurCustomers from "../../assets/images/delight-our-customers.jpg"
import constantInnovation from "../../assets/images/constant-innovation.png"
import doTheRightThing from "../../assets/images/do-the-right-thing.jpg"
import './OurValues.css'

const OurValues = () => {
  return (
    <>
      <div className="group-card">
        <ValueCard imgURL={delightOurCustomers} ValuesName="Delight our Customers" ValuesDesc="Your success is paramount. We value your trust." />
        <ValueCard imgURL={constantInnovation} ValuesName="Constant Innovation" ValuesDesc="Problem solving is fun. We iterate at hyperspeed." />
        <ValueCard imgURL={doTheRightThing} ValuesName="Do the Right Thing" ValuesDesc="We strive to act with integrity, transparency, and mutual respect." />
      </div>
    </>
  )
}

export default OurValues