import logo from '../../assets/images/hypREspace.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-design'>
      <p>Copyright © 2024 hypREspace</p>
      <img className='hypREspace-icon' src={logo} alt="hypREspace logo" />
    </div>
  )
}

export default Footer