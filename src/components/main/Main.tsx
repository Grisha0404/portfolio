import React from 'react';
import style from './main.module.scss'
import styleC from '../../command/styles/container.module.css'

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleC.container}>
                <div className={style.text}>
                    <span>Welcome to my world</span>
                    <h1>Hello I'm
                        <span> Gregory Kom! </span>
                    </h1>
                    <span>a Front-end Developer</span>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>

    );
};
