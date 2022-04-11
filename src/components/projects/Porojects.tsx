import React from 'react';
import style from "./projects.module.css";
import styleC from "../../command/styles/container.module.css";
import {Project} from "./project/project";
import {HashRouter} from "react-router-dom";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleC.container} ${style.projectsBlockContainer} `}>
                <h2>My Projects</h2>
                <div className={style.block}>
                    <HashRouter>
                    <Project title={"Social"} link={'/social'}/>
                    <Project title={"Counter"} link={'/counter'}/>
                    <Project title={"TodoList"} link={'/todolist'}/>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
};