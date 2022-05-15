import React from 'react';
import style from "./projects.module.scss";
import styleC from "../../command/styles/container.module.css";
import {Project} from "./project/project";
import {HashRouter} from "react-router-dom";
import {Title} from "../../command/Title/Title";
import imgTodo from '../../assets/image/3536667_935xp.jpeg'
import imgSocial from '../../assets/image/maxresdefault.jpeg'
import imgWeather from '../../assets/image/screenshot.png'

export const Projects = () => {
    const socialImg = {
        backgroundImage: `url(${imgSocial})`
    }
    const todolist = {
        backgroundImage: `url(${imgTodo})`
    }
    const weatherApp = {
        backgroundImage: `url(${imgWeather})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleC.container} ${style.projectsBlockContainer} `}>
                <Title title={'My Projects'}/>
                <div className={style.block}>
                    <HashRouter>
                        <Project title={"Social"} link={'/social'}
                                icon={socialImg}
                                 infoTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                        <Project title={"TodoList"} link={'/counter'} icon={todolist}
                                 infoTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                        <Project title={"Weather App"} link={'/todolist'} icon={weatherApp}
                                 infoTitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
};