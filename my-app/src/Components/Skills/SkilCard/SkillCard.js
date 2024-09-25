import React from 'react'
import './SkillCard.css'

const SkillCard = ({ tittle, iconUrl, isActive, onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
>
      <div className='skill-icon'>
        <img src={iconUrl} alt={tittle}/>
      </div>
      <span>{tittle}</span>
    </div>
  )
}

export default SkillCard
