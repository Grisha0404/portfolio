import React from 'react';
import style from './features.module.css'
import styleC from "../../command/styles/container.module.css";
import {Feature} from "./feature/Feater";

export const Features = () => {
    return (
        <div className={style.featuresBlock}>
            <div className={`${styleC.container} ${style.featuresBlockContainer} `}>
                <h2>What I do</h2>
                <div className={style.block}>
                    <Feature title={"Business Stratagy"}
                             descriptions={'I throw myself down among the tall grass by the stream as I\n' +
                                 '                lie close to the earth.'}/>
                    <Feature title={"App Development"}
                             descriptions={'I throw myself down among the tall grass by the stream as I lie close to the earth.'}/>
                    <Feature title={"App Development"}
                             descriptions={'It uses a dictionary of over 200 Latin words, combined with\n' +
                                 'a handful of model sentence.'}/>
                </div>
            </div>
        </div>
    );
};