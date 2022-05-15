import React from 'react';
import style from "./skill.module.scss";

type SkillType = {
    title: string,
    description: string
}

export const Skill = (props: SkillType) => {

    return (
        <div>
            <div className={style.skill}>
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
            </div>
            <div className={style.skillProgress}>
                <div className={style.skillProgressBlock} style={{width:props.description}}>
                </div>
            </div>
        </div>
    );
};
