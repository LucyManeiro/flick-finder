import popcorn from "../img/popcorn.jpg"
function About() {
  return (
    <div className="about-container">
        <div className="about-image-section">
            <img className="about-image" src={popcorn} alt="..."/>
        </div>
 
        <div className="about-info">
            <h4 className="about-title">About this Project</h4>
            <p className="about-description">Flick Finder is a React app to search for movies by title.</p>
            <p className="about-description"><strong>Version 1.0.0</strong></p>
      </div>
    </div>
  )
}

export default About;

