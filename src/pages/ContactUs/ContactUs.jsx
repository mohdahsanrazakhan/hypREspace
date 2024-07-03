import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contact-form'>
      <h2 className='section-main-title'>Get In Touch</h2>
      <div className='input-fields'>
        <input type="text" name="name" id="name" placeholder='Name' />
        <div className='input-group'>
          <input type="email" name="email" id="email" placeholder='Email' />

          <input type="number" name="phone" id="phone" placeholder='Phone' />
        </div>
        <textarea name="message" id="message" placeholder='Message'></textarea>
        <button>Send</button>
      </div>
    </div>
  )
}

export default ContactUs;