import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="navbar">
    <div className="profile">
      <h1 className="name">Janardhana</h1>
    </div>
    <div className="nav-list">
      <ul className="description">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
