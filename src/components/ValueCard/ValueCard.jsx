import './ValueCard.css'

const ValueCard = ({imgURL, ValuesName, ValuesDesc}) => {
  return (
    <div className='design-card'>
      <div className='card-img'>
        <img src={imgURL} alt={ValuesName} />
      </div>
      <h2 className='card-title'>{ValuesName}</h2>
      <p className='card-desc'>{ValuesDesc}</p>
    </div>
  )
}

export default ValueCard