import React from 'react';
import style from './feature.module.scss'

type FeatureType = {
    title: string
    descriptions: string
}

export const Feature = (props: FeatureType) => {
    return (
        <div className={style.feature}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <p className={style.descriptions}>
                {props.descriptions}
            </p>
        </div>
    );
};