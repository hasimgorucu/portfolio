import "./About.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="aboutContainer">
        <div className="aboutPictureContainer"></div>
        <div className="aboutTextContainer">
          <div className="sectionTexts">.ABOUT</div>
          <div className="aboutText">
            I am a full stack deveopler living in Izmir,Turkey. <br />
            <br />
            Ever since I was a teenager, I was intrested computer science
            especially programming. Finally I decided to start to my new career
            path and become a full stack developer.
            <br /><br />
            My adventure started with a course organised by Archies Academy where I learned basic some more advanced programming topics such as Javascript, React and NodeJS.
            <br />
            <br />
            Privatly I am intrested in technologic innovations, sci-fi and philosophia. I am an open, friendly team member.
          </div>
        </div>
      </div>
      <div className="aboutArrow">
      <a href="#skills">
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
      </div>
    </section>
  );
}

export default About;
