import React from 'react'
import Skill from '../Skills/Skill/Skill'
import Course from './Course/Course'
import style from './Courses.module.css'

const Courses=()=>{
     return( 
     <div className={style.courses}>
         <Course></Course>
         <Course></Course>
         <Course></Course>
     </div>
     )    
}
export default Courses