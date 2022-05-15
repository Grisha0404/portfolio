import React from 'react';
import style from "./contacts.module.scss";
import {Contact} from "./contact/Contact";
import styleC from "../../command/styles/container.module.css";
import {Title} from "../../command/Title/Title";
import imgTel from "../../assets/image/icons8-telephone-64.png";
import emailImg from "../../assets/image/icons8-mail-48.png";
import locImg from "../../assets/image/icons8-location-100.png";

export const Contacts = () => {
    const telImg = {
        backgroundImage: `url(${imgTel})`
    }
    const email = {
        backgroundImage: `url(${emailImg})`
    }
    const location = {
        backgroundImage: `url(${locImg})`
    }
    return (
        <div className={style.contacts}>
            <div className={`${styleC.container} ${style.contactBlockContainer} `}>
                <div className={style.contactsBlock}>
                    <Title title={'Get in touch'}/>
                    <div className={style.infoBlock}>
                        <Contact icon={telImg} title={"Phone:"} descriptions={'+375336133523'}/>
                        <Contact icon={email} title={"Email:"} descriptions={'grisha.kom@gmail.com'}/>
                        <Contact icon={location} title={"Location:"} descriptions={"Minsk, Nikoly Tesly street, 7"}/>
                    </div>
                </div>
                <div className={style.messageBlock}>
                    <input placeholder={'Name'}/>
                    <input placeholder={'Email'}/>
                    <textarea placeholder={'Message'}/>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    );
};
