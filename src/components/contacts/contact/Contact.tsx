import React from 'react';
import style from "../../contacts/contact/contact.module.scss";

type ContactType={
    title: string,
    descriptions:string,
    icon:{
        backgroundImage: string;
    }
}

export const Contact = (props:ContactType) => {
    return (
        <div className={style.contact}>
            <div className={style.icon} style={props.icon}></div>
            <h3>{props.title}</h3>
            <p>
                {props.descriptions}
            </p>
        </div>
    );
};
