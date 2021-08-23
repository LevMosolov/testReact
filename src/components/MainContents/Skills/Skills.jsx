import React from 'react'
import Skill from './Skill/Skill'
import style from './Skills.module.css'
const Skills=()=>{
     return( 
     <div className={style.skills}>
         <Skill></Skill>
         <Skill></Skill><Skill></Skill>
         <Skill></Skill>
     </div>
     )    
}
export default Skills