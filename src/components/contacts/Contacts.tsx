import React from 'react';
import style from "./contacts.module.css";
import {Contact} from "./contact/Contact";
import styleC from "../../command/styles/container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleC.container} ${style.contactBlockContainer} `}>
                <div className={style.messageBlock}>
            <h2>
                Get in touch
            </h2>
                    <input style={{width:'450px'}}/>
                    <input style={{ width:'450px'}}/>
                        <input style={{height: '100px', width:'450px'}}/>
                    <button>Send a Message</button>
                </div>
                <div className={style.contactsBlock}>
                    <h2>Contact info</h2>
                    <div className={style.infoBlock}>
                    <Contact title={"Phone:"} descriptions={'+375336133523'}/>
                    <Contact title={"Email:"} descriptions={'grisha.kom@gmail.com'}/>
                    <Contact title={"Location:"} descriptions={"Minsk, Nikoly Tesly street, 7"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
