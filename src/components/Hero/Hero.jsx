import './Hero.css'
import hypREspace from "../../assets/video/hypREspace.mov"


const Hero = () => {
  return (
    <div className="hero-portion">
      <video id="hero-video" autoPlay loop muted="muted" playsInline controlsList="nodownload" volume="0">
        <source src={hypREspace} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero