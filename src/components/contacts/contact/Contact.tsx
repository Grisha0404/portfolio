import React from 'react';
import style from "../../features/feature/feature.module.css";

type ContactType={
    title: string
    descriptions:string
}

export const Contact = (props:ContactType) => {
    return (
        <div className={style.contact}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <p>
                {props.descriptions}
            </p>
        </div>
    );
};
