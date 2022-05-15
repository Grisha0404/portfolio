import React from 'react';
import style from "./social.module.css";

type SocialType={
    icon:{
        backgroundImage: string;
    }
}

export const Social = (props:SocialType) => {
    return (
        <div className={style.social}>
            <div className={style.icon} style={props.icon}></div>
        </div>
    );
};