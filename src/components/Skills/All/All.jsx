
import React from 'react'
import Skill from '../../MainContents/Skills/Skill/Skill'
import style from './All.module.css'

const All=()=>{
    return(
        <div className={style.all}>
            <div className={style.title}>All</div>
            <Skill></Skill>
            <Skill></Skill>
            <Skill></Skill>
            <Skill></Skill>
            <Skill></Skill>
        </div>
    )
}

export default All