import React from 'react';
import style from "./skills.module.css"
import styleC from "../../command/styles/container.module.css";
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleC.container} ${style.skillsBlockContainer} `}>
                <span>
                    <p>My level of knowledge in some tools</p>
                    <h2>My Skills</h2>
                </span>
                <div className={style.blockSkills}>
                <Skill title={'HTML/CSS'} description={'80%'}/>
                <Skill title={'JavaScript'} description={'45%'}/>
                <Skill title={'React'} description={'55%'}/>
                <Skill title={'TypeScript'} description={'65%'}/>
                </div>
            </div>
        </div>
    );
};
