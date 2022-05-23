import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Projects} from "../projects/Porojects";
import {Main} from "../main/Main";
import {Features} from "../features/Features";
import {Skills} from "../skills/Skills";
import {Contacts} from "../contacts/Contacts";

export const PATH = {
    HOME: '/home',
    PROJECTS: '/projects',
    FEATURES: '/features',
    SKILLS: '/skills',
    CONTACT: '/contact'
    // add paths
}
export const Routers = () => {
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Navigate to={PATH.HOME}/>}/>
                    <Route path={PATH.HOME} element={<Main/>}/>
                    <Route path={PATH.PROJECTS} element={<Projects/>}/>
                    <Route path={PATH.FEATURES} element={<Features/>}/>
                    <Route path={PATH.SKILLS} element={<Skills/>}/>
                    <Route path={PATH.CONTACT} element={<Contacts/>}/>
                </Routes>
        </div>
    );
};
