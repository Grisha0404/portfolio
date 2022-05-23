import React from 'react';
import {Link} from "react-router-dom";
import style from './nav.module.scss'
import {PATH} from "../Routes/Routes";

export const Nav = () => {
    return (
        <div className={style.navLink}>
            <Link to={PATH.HOME} className={style.link}>Home</Link>
            <Link to={PATH.PROJECTS} className={style.link}>Projects</Link>
            <Link to={PATH.FEATURES} className={style.link}>Features</Link>
            <Link to={PATH.SKILLS} className={style.link}>Skills</Link>
            <Link to={PATH.CONTACT} className={style.link}>Contact</Link>
        </div>
    );
};

