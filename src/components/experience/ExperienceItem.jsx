import './ExperienceItem.css'
function ExperienceItem(properties) {
  return (
    <div className="experienceItem">
      <span className="year">{properties.year}</span>
      <div className="experiencelineContainer">
        <span className="experienceCircle"></span>
        <span className="experienceLine"></span>
      </div>
      <div className="experienceItemTexts">
        <h2 className="experiencePosition">{properties.position}</h2>
        <h5 className="experienceCompany">{properties.company}</h5>
      </div>
    </div>
  )
}

export default ExperienceItem
