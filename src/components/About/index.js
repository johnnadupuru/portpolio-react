import './index.css'

const About = () => (
  <div className="about-page">
    <div className="education-card">
      <div className="heading">
        <img
          src="https://i.ibb.co/P9X9nWw/2016-02-4-22-43-35-sai-mdhavi-college.gif"
          className="logo"
          alt="logo-pic"
        />
        <h1 className="education">Engineering</h1>
      </div>
      <div className="details">
        <p className="description">
          <span className="property">College Name</span> : Sri Sai Madhavi
          Institute Of Science And Technology
        </p>
        <p className="description">
          <span className="property"> Branch</span> : Mechanical
        </p>
        <p className="description">
          <span className="property">Percentage</span> :65%
        </p>
        <p className="description">
          <span className="property">Year Of Graduation</span> :2012-2016
        </p>
      </div>
    </div>
    <div className="education-card">
      <div className="heading">
        <img
          src="https://i.ibb.co/4tP27SP/images.jpg"
          className="logo"
          alt="logo-pic"
        />
        <h1 className="education">Intermediate</h1>
      </div>
      <div className="details">
        <p className="description">
          <span className="property">College Name</span> : R K Junior College
        </p>
        <p className="description">
          <span className="property"> Branch</span> : M.P.C
        </p>
        <p className="description">
          <span className="property">Percentage</span> :87%
        </p>
        <p className="description">
          <span className="property">Year Of Graduation</span> :2010-2012
        </p>
      </div>
    </div>
  </div>
)
export default About
