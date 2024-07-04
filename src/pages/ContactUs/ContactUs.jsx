import './ContactUs.css'
import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [captchaVal, setCaptchaVal] = useState(null);

  return (
    <div className='contact-form'>
      {/* <h2 className='section-contact-title'>Contact Us</h2> */}
      <div className='input-fields'>
        <label>Name <span className='form-required'>*</span></label>
        <div className="input-group">
          <input type="text" name="name" id="name" placeholder='First name' required />
          <input type="text" name="name" id="name" placeholder='Last name' required />
        </div>
        <div className='input-group'>
          <div className='nest-input-fields'>
            <label>Work email <span className='form-required'>*</span></label>
            <input type="email" name="email" id="email" placeholder='' required />
          </div>
          <div className='nest-input-fields'>
            <label>Subject</label>
            <input type="text" name="subject" id="subject" placeholder='' />
          </div>
        </div>
        <div className='input-fields'>
          <label>Comment/Questions</label>
          <textarea name="message" id="message" placeholder=''></textarea>
        </div>
        <div className='content_center'>
        <ReCAPTCHA
          className="reCaptcha-style mt-3 mt_reCaptcha"
          sitekey="6Lc2HQcqAAAAAETVU0PH_YcIC5Wb7oUOtcoAVqI0"
          onChange={(val) => setCaptchaVal(val)}
        />
        <button className='mt-3 button_contact'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;