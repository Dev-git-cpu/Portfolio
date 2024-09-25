import React from 'react'
import './ExperienceCard.css'
const ExperienceCard = ({details}) => {
  return (
    <div>

     <div className='work-experience-card'>
      <h6>{details.tittle}</h6>
      <div className='work-duration'>{details.date}</div>
      <ul>
        {details.responsibilities.map((item) =>(
          <li key={item}>{item}</li>
        ))}
      </ul>

     </div>
    </div>
  )
}

export default ExperienceCard
