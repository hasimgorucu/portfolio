import './Project.css'
function Project(properties) {
  const project = properties.projectItem;
  return (
    <div className='projectBody'>
      <div className="projectIndex">{properties.index <9 ? `0${properties.index +1}` : `${properties.index +1}`}</div>
      <div className="imgWrapper">
        <img src={project.projectPicture} alt="" />
      </div>
      <div className="projectTexts">
        <h1 className="projectTitle">{project.projectName}</h1>
        <p className="projectDetail">{project.projectDetail}</p>
        <button>SHOW PROJECT</button>
      </div>
    </div>
  )
}

export default Project
