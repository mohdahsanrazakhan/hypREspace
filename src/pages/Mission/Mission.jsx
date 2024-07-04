import './Mission.css'
import map from '../../assets/images/map.jpg'
import mapBackground from '../../assets/images/map-bg.png'
import Type from '../../components/TypewriterEffect/Type'


const Mission = () => {
  return (
    <>
      <div className='mission-parent'>
        {/* Images Portion */}
        <div className="mission-img-part">
          <img src={map} alt="hypREspace map" />
          <img id='map-background' src={mapBackground} alt="map background" className='filter' />
        </div>
        {/* Text Portion */}
        <div className='mission-info-part'>
          <h3 id='mission-info-title'>hypREspace</h3>
          <ul id='mission-info-list'>
            <li><strong>/ˈhīpərˌspās/ noun</strong> – space of more than three dimensions.</li>
            <li>(in science fiction) a notional space-time continuum in which it is possible to travel faster than light.</li>
          </ul>
          <Type />
          <hr id='mission-hr' />
        </div>
      </div>

      <div className='bg-img'>
        <div className="mission-paragraph">
          <p>To offer transformative solutions for the commercial real estate industry, tailored for major occupiers. Our highly flexible platform is designed to improve both the quality and speed of strategy and execution, capture robust audit trails, enhance real-time visibility into details, and ensure rigorous adherence to essential operations such as key date management, site selection, and financial analysis.</p>
          <p>&nbsp;</p>
          <p>In parallel, <strong>we aim to significantly improve the experience for those on the front lines</strong>. Our approach includes reducing data entry burdens, establishing uniformity across client deliverables, minimizing time spent on routine tasks like information gathering and reformatting, and providing intuitive workflow automation.</p>
        </div>
      </div>
    </>
  )
}

export default Mission