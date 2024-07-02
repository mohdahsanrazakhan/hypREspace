import TypeWriter from 'typewriter-effect'
import './Type.css'

const Type = () => {
  return (
    <div className="TypeEffect">
      <TypeWriter
        options={{
          strings: ["WORK FASTER", "GAIN CONTROL", "ONE PLATFORM", "WORK SMARTER"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  )
}

export default Type