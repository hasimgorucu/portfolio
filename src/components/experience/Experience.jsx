import Arrow from "../Arrow";
import "./Experience.css";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="allExperienceContainer">
        <div className="experienceContainer">
          <div className="sectionTexts">.EXPERIENCE.</div>
          <div className="experienceTextsWrapper">
            <ExperienceItem year={"2023"} company={"Nomris Digital"} position={"Mid Developer"}/>
            <ExperienceItem year={"2022"} company={"FeatDoor Agency"} position={"Junior Developer"}/>
            <ExperienceItem year={"2021"} company={"FeatDoor Agency"} position={"Intern"}/>
          </div>
        </div>
        <Arrow href="#projects" />
      </div>
    </section>
  );
}

export default Experience;
