import React from 'react';
import style from './footer.module.scss'
import styleC from "../../command/styles/container.module.css";
import {Social} from "./social/Social";
import imgLin from "../../assets/image/icons8-linkedin-circled-100.png";
import instImg from "../../assets/image/icons8-instagram-100.png";
import gitImg from "../../assets/image/icons8-github-100.png";

export const Footer = () => {
    const link = {
        backgroundImage: `url(${imgLin})`
    }
    const inst = {
        backgroundImage: `url(${instImg})`
    }
    const git = {
        backgroundImage: `url(${gitImg})`
    }
    return (
        <div className={style.footerBlock}>
            <div className={`${styleC.container} ${style.footerBlockContainer} `}>
                <h2>Gregory Kom</h2>
                <div className={style.socialBlock}>
                    <Social icon={link} link={'https://www.linkedin.com/in/grisha0404/'}/>
                    <Social icon={inst} link={'https://www.instagram.com/'}/>
                    <Social icon={git} link={'https://github.com/Grisha0404'}/>
                </div>
                <p>© 2022. All rights reserved</p>
            </div>

        </div>
    );
};
