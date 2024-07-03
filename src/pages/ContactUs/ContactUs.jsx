import './ContactUs.css'
import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [captchaVal, setCaptchaVal] = useState(null);

  return (
    <div className='contact-form'>
      <h2 className='section-contact-title'>Contact Us</h2>
      <div className='input-fields'>
        <label>Name <span className='form-required'>*</span></label>
        <div className="input-group">
          <input type="text" name="name" id="name" placeholder='First name here' required />
          <input type="text" name="name" id="name" placeholder='Last name here' required />
        </div>
        <div className='input-group'>
          <div className='nest-input-fields'>
            <label>Work e-mail <span className='form-required'>*</span></label>
            <input type="email" name="email" id="email" placeholder='Enter you email' required />
          </div>
          <div className='nest-input-fields'>
            <label>Subject</label>
            <input type="text" name="subject" id="subject" placeholder='How we can help you?' />
          </div>
        </div>
        <div className='input-fields'>
          <label>Comment/Questions</label>
          <textarea name="message" id="message" placeholder='Comments'></textarea>
        </div>
        <ReCAPTCHA
          className="reCaptcha-style mt-3"
          sitekey="6Lc2HQcqAAAAAETVU0PH_YcIC5Wb7oUOtcoAVqI0"
          onChange={(val) => setCaptchaVal(val)}
        />
        <button>SEND MESSAGE</button>
      </div>
    </div>
  )
}

export default ContactUs;