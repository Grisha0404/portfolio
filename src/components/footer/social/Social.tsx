import React from 'react';
import style from "./social.module.css";
import {Link, useNavigate} from "react-router-dom";

type SocialType = {
    icon: {
        backgroundImage: string;
    },
    link: string,
}

export const Social = (props: SocialType) => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(props.link)
    }
    return (
        <div className={style.social}>
                <div className={style.icon} style={props.icon} onClick={clickHandler}></div>
        </div>
    );
};