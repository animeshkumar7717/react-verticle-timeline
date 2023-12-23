import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from './data'

const App = () => {

  return (
    <div>
      <h1 className='timeline'>Timeline</h1>
      <VerticalTimeline>
      {
        timelineElements.map((item)=>{
          return (
            <VerticalTimelineElement className='date' date={item.date} dateClassName={''} key={item.id}>

            </VerticalTimelineElement>
          )
        })
      }
      </VerticalTimeline>
    </div>
  )
}
// className='' date={''} dateClassName={''} key={}
export default App
