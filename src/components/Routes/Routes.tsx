import React from 'react';
import {Switch, Route} from "react-router-dom";
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
export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={PATH.HOME} render={() => <Main/>}/>
                <Route path={PATH.PROJECTS} render={() => <Projects/>}/>
                <Route path={PATH.FEATURES} render={() => <Features/>}/>
                <Route path={PATH.SKILLS} render={() => <Skills/>}/>
                <Route path={PATH.CONTACT} render={() => <Contacts/>}/>
            </Switch>
        </div>
    );
};
