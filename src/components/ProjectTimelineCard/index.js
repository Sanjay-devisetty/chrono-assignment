// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div>
      <img
        src={imageUrl}
        alt={projectTitle}
        className="project-timeline-image"
      />
      <div className="project-header-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="anchor-element">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
