import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from './data'

const App = () => {
  let workIcon = {background: 'limegreen'}
  let schoolIcon = {background: 'lightcoral'}

  return (
    <div>
      <h1 className='title'>Timeline</h1>
      <VerticalTimeline>
      {
        timelineElements.map((item)=>{
          let isButton = item.buttonText !== undefined && item.buttonText !== null && item.buttonText !== ''
          return (
            <VerticalTimelineElement className='date' date={item.date} dateClassName={'date'} key={item.id} iconStyle={item.icon === 'work' ? workIcon:schoolIcon }>
              <h3 className='verticle-timeline-element-title'>{item.title}</h3>
              <h5 className='verticle-timeline-element-subtitle'>{item.location}</h5>
              <p className='p'>{item.description}</p>
              {isButton && (<button className={`btn ${item.icon === "work" ? "work-btn" : "school-btn"}`} >{item.buttonText}</button>)}
            </VerticalTimelineElement>
          )
        })
      }
      </VerticalTimeline>
    </div>
  )
}

export default App
