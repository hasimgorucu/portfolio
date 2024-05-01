import SkillsIcons from "./SkillsIcons";
import "./Skills.css";
import Arrow from "../Arrow";
function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skillsContainer">
        <div className="skillsAllContainer">
          <div className="skillsTextContainer">
            <div className="sectionTexts">SKILLS.</div>
            <div className="skillsTexts">
              <h3 className="skillsTitle">Front End</h3><br />
              <p className="skillText"> - HTML</p>
              <p className="skillText"> - CSS</p>
              <p className="skillText"> - SASS</p>
              <p className="skillText"> - JAVSCRIPT</p>
              <p className="skillText"> - REACT & REDUX</p><br />
              <h3 className="skillsTitle">Back End</h3><br />
              <p className="skillText"> - NODE JS</p>
              <p className="skillText"> - FIREBASE</p>
            </div>
          </div>
          <div className="skillsIconContainer">
            <SkillsIcons/>
          </div>
        </div>
        <Arrow href="#experience"/>
      </div>
    </section>
  );
}

export default Skills;
