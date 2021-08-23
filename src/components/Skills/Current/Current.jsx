import React from 'react'
import Skill from '../../MainContents/Skills/Skill/Skill'
import style from './Current.module.css'

const Current =()=>{
    return(
        <div className={style.current}>
            <div className={style.title}>Current skills</div>
            <Skill></Skill>
            <Skill></Skill>
        </div>
    )
}

export default Current