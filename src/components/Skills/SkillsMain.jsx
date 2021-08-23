import React from 'react'
import All from './All/All'
import Curretn from './Current/Current'
import style from './SkillsMain.module.css'

const SkillsMain =()=>{
    return(
        <div className={style.skillsMain}>
            <div className='title'>Skills</div>
            <Curretn></Curretn>
            <All></All>
        </div>
    )
}

export default SkillsMain