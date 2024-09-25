import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkilCard/SkillCard'
import { SKILLS } from '../../utils/data'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {

const[selectedSkill, setSelectedSkill] = useState(SKILLS[0])
const handleSelectSkill = (data)=>{
   setSelectedSkill(data)
}
  return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
            <div className='skills'>
                {SKILLS.map((item)=>(
                    <SkillCard
                    key={item.tittle}
                    iconUrl={item.icon}
                    tittle={item.tittle}
                    isActive={selectedSkill.tittle === item.tittle}
                    onClick={()=>{
                        handleSelectSkill(item);
                    }}
                    />

                ))}
            </div>
            <div className='skills-info'>
                <SkillsInfoCard
                heading={selectedSkill.tittle}
                skills={selectedSkill.skills}
                />

            </div>

        </div>
    </section>
  )
}

export default Skills
