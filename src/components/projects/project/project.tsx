import React from 'react';
import style from "./project.module.scss";

type ProjectType = {
    title: string,
    link:string,
    infoTitle: string,
    icon:{
        backgroundImage: string;
    },
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.icon} style={props.icon}>
                {/*<NavLink to={props.link}>{props.title}</NavLink>*/}
            </div>
            <div className={style.title}>{props.title}</div>
            <p className={style.textInfo}>{props.infoTitle}</p>
        </div>
    );
};