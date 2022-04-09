import React from 'react';
import style from './header.module.css'
import {Nav} from "../navLink/Nav";
import {HashRouter} from "react-router-dom";

export const Header = () => {
    return (
        <div className={style.head}>
            <HashRouter>
            <Nav/>
            </HashRouter>
        </div>
    );
};