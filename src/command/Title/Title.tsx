import React from 'react';
import style from "./title.module.css";

type TitleType = {
    title: string,
}

export const Title:React.FC<TitleType> = ({title}) => {
    return (
        <div className={style.title}>
            <h1>{title}</h1>
        </div>
    );
};
