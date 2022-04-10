import React from 'react';
import style from "./project.module.css";

type ProjectType = {
    title: string
}

export const Project = (props: ProjectType) => {
    return (
        <div>
            <div className={style.icon}>
            </div>
            <div style={{textAlign:"center"}}>{props.title}</div>
        </div>
    );
};