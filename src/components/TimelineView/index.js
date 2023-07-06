// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineView from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineView = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineView key={item.id} courseDetails={item} />
  }

  return (
    <div className="timeline-container">
      <div className="chrono-container">
        <div className="header-container">
          <h1 className="header-heading">
            MY JOURNEY OF <br />
            <span className="span-element"> CCBP 4.0 </span>
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineView(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
