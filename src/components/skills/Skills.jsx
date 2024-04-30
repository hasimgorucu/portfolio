import SkillsIcons from "./SkillsIcons";
import "./Skills.css";
function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skillsContainer">
        <div className="skillsAllContainer">
          <div className="skillsTextContainer">
            <div className="sectionTexts">.SKILLS</div>
          </div>
          <div className="skillsIconContainer">
            <SkillsIcons/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
