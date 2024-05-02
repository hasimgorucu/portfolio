import { useState } from "react";
import "./Projects.css";
import data from "./projectsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Project from "./Project";
import Arrow from "../Arrow";

function Projects() {
  const [projectCount, setProjectCount] = useState(0);

  const incrementProject = ()=>{
    if(projectCount == data.length-1){
      setProjectCount(0)
    }else{
      setProjectCount(projectCount+1)
    }
  }

  const decrementProject = ()=>{
    if(projectCount == 0){
      setProjectCount(data.length-1)
    }else{
      setProjectCount(projectCount-1)
    }
  }

  return (
    <section className="projects" id="projects">
      <div className="allProjectsContainer">
        <div className="projectsContainer">
          <div className="sectionTexts">.PROJECTS.</div>
          <div className="projectWrapper">
            <a onClick={decrementProject}><FontAwesomeIcon icon={faChevronLeft} className="projectArrow" size="2x"/></a>
            <Project projectItem={data[projectCount]} index={projectCount}/>
            <a onClick={incrementProject}><FontAwesomeIcon icon={faChevronRight} className="projectArrow" size="2x"/></a>
          </div>
        </div>
        <Arrow href={"#contact"}/>
      </div>
    </section>
  );
}

export default Projects;
