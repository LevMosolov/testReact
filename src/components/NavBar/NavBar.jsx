import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import style from './NavBar.module.css'

const NavBar = () => {
     return (
          <div className={style.nav}>
               <nav >
                    <div><NavLink to="/home" activeClassName={style.activeLink}>Home</NavLink></div>
                    <div><NavLink to="/dialogs" activeClassName={style.activeLink}>Dialogs</NavLink></div>
                    <div><NavLink to="/skills" activeClassName={style.activeLink}>Skills</NavLink></div>
                    <div><NavLink to="/friends" activeClassName={style.activeLink}>Friends</NavLink></div>
                    <div>Courses</div>
               </nav>
               <Footer></Footer>
          </div>
     )
}
export default NavBar