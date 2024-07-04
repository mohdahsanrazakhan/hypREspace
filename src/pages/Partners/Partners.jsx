import './Partners.css'
import cw from '../../assets/images/CW.png'
import jll from '../../assets/images/JLL.png'

const Partners = () => {
  return (
    <>
      <h2 className='section-main-title'>Our Partners</h2>
      <div className='group-companies'>
        <img src={cw} alt="Cushman & Wakefield Logo" />
        <img src={jll} alt="JLL Logo" />
      </div>
    </>
  )
}

export default Partners