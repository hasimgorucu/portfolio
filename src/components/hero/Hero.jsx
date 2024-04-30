import "./Hero.css";
import HeroSocialMedia from "./HeroSocialMedia";
function Hero() {
  return (
    <section className="heroSection" id="hero">
      <div className="heroContainer">
        <div className="heroCameraContainer">
          <div className="heroCamera">
            <div className="heroLine"></div>
            <div className="heroCircle"></div>
          </div>
        </div>
        <div className="heroItemsContainer">
          <div className="heroTexts">
            <h1 className="heroIntr">
              Hi, I am <h1 className="heroIntrName">Hasim Gorucu</h1>
            </h1>
            <h4 className="heroFullStack">I am full stack deveopler</h4>
            <HeroSocialMedia />
          </div>
          <div className="heroDownContainer">
            <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              className="bi bi-chevron-double-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
              <path
                fillRule="evenodd"
                d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
            </a>
            <span className="heroDownText">Fade To Black</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
