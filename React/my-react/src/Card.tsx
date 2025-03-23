import Myimage from './assets/MyImage.jpg'

const Card = () => {
  return (
    <div className="card">
      <img className='card-image' src={Myimage} alt="profile Picture"></img>
      <h2 className='card-title'>Dickson Ndumia</h2>
      <p className='card-text'>I am a Fullstack Software Developer and play Video games</p>
    </div>
  )
}

export default Card
