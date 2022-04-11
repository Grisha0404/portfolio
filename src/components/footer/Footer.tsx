import React from 'react';
import style from './footer.module.css'
import styleC from "../../command/styles/container.module.css";
import {Social} from "./social/Social";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleC.container} ${style.footerBlockContainer} `}>
                <h2>Grigoriy Kom</h2>
                <div className={style.socialBlock}>
                    <Social/>
                    <Social/>
                    <Social/>
                </div>
                <span>© 2022. All rights reserved</span>
            </div>

        </div>
    );
};
