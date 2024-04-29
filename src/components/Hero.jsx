import './Hero.css'
function Hero() {
  return (
    <section className="heroSection">
      
      <div className="heroContainer">
      <div className="heroCameraContainer">
      <div className="heroCamera">
        <div className="heroLine"></div>
        <div className="heroCircle"></div>
      </div>
      </div>
      <header className='header'>
        <div className="language">
          <span>Eng</span>
          <span>Tr</span>
        </div>
        <nav className="navBar">
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Last Products</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      </div>
      
    </section>
  )
}

export default Hero
