import './index.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faSquareWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => (
  <div className="contact-card">
    <div className="address">
      <div className="address-card">
        <div className="heading">
          <h1 className="heading-name">Address Details</h1>
        </div>
        <div className="details">
          <p className="description">
            <span className="property">Name</span>: N.Janardhana
          </p>
          <p className="description">
            <span className="property">Address</span>:
          </p>
          <div className="card">
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p className="address-details">
              Bhupalapuram Village, Gurla Mandal, Vizianagaram Dist,Andhra Prdesh
              Pincode:535280
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="follow-section">
      <h1 className="follow">Follow me</h1>
      <div className="font-card">
        <div className="font">
          <a href="https://www.facebook.com/john.nadupuru/" className="font">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className="font">
          <a
            href="https://www.linkedin.com/in/janardhana-nadupuru-47ab76262/"
            className="font"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <h1 className="follow">Contact me</h1>
      <div className="font-card">
        <div className="contact-me-card">
          <div className="font">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <p className="email">johnnadupuru186@gmail.com</p>
        </div>
        <div className="contact-me-card">
          <div className="font">
            <FontAwesomeIcon icon={faSquareWhatsapp} />
          </div>
          <p className="email">+91-8500490186</p>
        </div>
        <div className="contact-me-card">
          <div className="font">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p className="email">+91-8500490186</p>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
