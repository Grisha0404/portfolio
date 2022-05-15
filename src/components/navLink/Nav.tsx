import React from 'react';
import {NavLink} from "react-router-dom";
import style from './nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.navLink}>
            <NavLink to='/home'  className={style.link}>Home</NavLink>
            <NavLink to='/projects' className={style.link}>Projects</NavLink>
            <NavLink to='/features' className={style.link}>Features</NavLink>
            <NavLink to='/skills' className={style.link}>Skills</NavLink>
            <NavLink to='/contact' className={style.link}>Contact</NavLink>
        </div>
    );
};
