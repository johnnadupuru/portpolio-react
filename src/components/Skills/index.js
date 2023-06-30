import './index.css'

const Skills = () => (
  <div className="about-page">
    <div className="education-card">
      <div className="heading">
        <h1 className="education">Frontend Skills</h1>
      </div>
      <div className="details">
        <ul>
          <li className="list-item">HTML</li>
          <li className="list-item">CSS</li>
          <li className="list-item">Bootstrap</li>
          <li className="list-item">JavaScript</li>
          <li className="list-item">React JS</li>
        </ul>
      </div>
    </div>
    <div className="education-card">
      <div className="heading">
        <h1 className="education">Backend Skills</h1>
      </div>
      <div className="details">
        <ul>
          <li className="list-item">PYTHON</li>
          <li className="list-item">Node JS</li>
          <li className="list-item">Express JS</li>
        </ul>
      </div>
    </div>
    <div className="education-card">
      <div className="heading">
        <h1 className="education">Database</h1>
      </div>
      <div className="details">
        <ul>
          <li className="list-item">SQL</li>
        </ul>
      </div>
    </div>
  </div>
)
export default Skills
