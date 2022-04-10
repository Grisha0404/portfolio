import React from 'react';
import style from "./projects.module.css";
import styleC from "../../command/styles/container.module.css";
import {Project} from "./project/project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleC.container} ${style.projectsBlockContainer} `}>
                <h2>My Projects</h2>
                <div className={style.block}>
                    <Project title={"Social"}/>
                    <Project title={"Counter"}/>
                    <Project title={"TodoList"}/>
                </div>
            </div>
        </div>
    );
};