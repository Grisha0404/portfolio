import React from 'react';
import style from './feature.module.css'

type FeatureType = {
    title: string
    descriptions: string
}

export const Feature = (props: FeatureType) => {
    return (
        <div className={style.feature}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <p>
                {props.descriptions}
            </p>
        </div>
    );
};