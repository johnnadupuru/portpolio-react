import './index.css'
import resume from '../Janardhana.pdf'

const Home = () => (
  <div className="home-container">
    <div className="home">
      <div className="name-card">
        <h1 className="home-name">JANARDHANA</h1>
        <p className="name-desc">
          <span className="pre-name">I am </span> Full Stack Developer <br />
          <span className="pre-name">
            with a passion for learning and creating
          </span>
        </p>
      </div>
      <div className="image-card">
        <img
          src="https://i.ibb.co/7k3b9CQ/1687749336015.jpg"
          alt="Profile pic"
          className="image"
        />
      </div>
    </div>
    <div className="download-card">
      <a href={resume} download="resume">
        <button type="button" className="button">
          Download Resume
        </button>
      </a>
    </div>
  </div>
)
export default Home
