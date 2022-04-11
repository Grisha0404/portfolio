import React from 'react';
import style from "./project.module.css";
import {NavLink} from "react-router-dom";

type ProjectType = {
    title: string,
    link:string
}

export const Project = (props: ProjectType) => {
    return (
        <div>
            <div className={style.icon}>
                <NavLink to={props.link}>{props.title}</NavLink>
            </div>
            <div style={{textAlign:"center"}}>{props.title}</div>
        </div>
    );
};