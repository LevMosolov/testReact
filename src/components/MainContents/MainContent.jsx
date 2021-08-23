import React from 'react'
import style from './MainContent.module.css'
import Statistics from './Statistics/Statistics'
import Skills from './Skills/Skills'
import Courses from './Courses/Courses'


const MainContent=()=>{
     return( 
          <div className={style.mainContent}>
               <Courses></Courses>
               <Skills></Skills>
               <Statistics></Statistics>
          </div>
     )    
}
export default MainContent