import React from 'react';
import {NavLink} from "react-router-dom";
import style from './nav.module.css'



export const Nav = () => {
    return (
        <div className={style.navLink}>
            <NavLink to='/home' >Home</NavLink>
            <NavLink to='/skills' >Skills</NavLink>
            <NavLink to='/features' >Features</NavLink>
            <NavLink to='/projects' >Projects</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
        </div>
    );
};
