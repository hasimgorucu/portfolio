import Arrow from "../Arrow";
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
            Privatly I am intrested in technologic innovations, sci-fi and philosophy. I am an open, friendly team member.
          </div>
        </div>
      </div>
      <Arrow href="#skills"/>
    </section>
  );
}

export default About;
