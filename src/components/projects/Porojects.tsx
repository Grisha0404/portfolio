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
    const aboutSocial = 'Used technologies: React/Redux/ TypeScript/Redux- thunk/React-router- dom v6/React-hook-form/Axios/Jest; Social network app with using react hooks, routing. ng. lazy loading, working with REST api, login/logout flow, pagination, form and validation/file uploading using unit-tests for code workability check.'
    const aboutWeather = 'Used technologies: React/Redux/Redux-Toolkit/ React-router- dom v6/Axios /Material UI; Weather app created with react hooks, material Ul, REST api request/response flow and etc.'
    const aboutTodolist = 'Used technologies: React/Redux/Redux-Toolkit/ React-router- dom v6/Jest(Unit-Tests) /Storybook/Axios /Formik/Material UI; Todolist app created with react hooks, routing and redirects, material Ul, REST api request/response flow, unit-tests and etc.'
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleC.container} ${style.projectsBlockContainer} `}>
                <Title title={'My Projects'}/>
                <div className={style.block}>
                    <HashRouter>
                        <Project title={"Social"} link={'/social'}
                                 icon={socialImg}
                                 infoTitle={aboutSocial}/>
                        <Project title={"Weather App"} link={'/todolist'} icon={weatherApp}
                                 infoTitle={aboutWeather}/>
                        <Project title={"TodoList"} link={'/counter'} icon={todolist}
                                 infoTitle={aboutTodolist}/>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
};