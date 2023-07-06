// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineView = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <>
      <div className="heading-and-duration-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tag-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="tag-name">
            {eachTag.name}
          </p>
        ))}
      </div>
    </>
  )
}

export default CourseTimelineView
