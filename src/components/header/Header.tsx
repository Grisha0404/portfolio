import React from 'react';
import style from './header.module.scss'
import {Nav} from "../navLink/Nav";

export const Header = () => {
    return (
        <div className={style.head}>
            <Nav/>
        </div>
    );
};