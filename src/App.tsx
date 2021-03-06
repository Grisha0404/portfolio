import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Features} from "./components/features/Features";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Porojects";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Routers} from "./components/Routes/Routes";

function App() {
    return (
        <div className='App'>
            <Header/>
            <Routers/>
            <Main/>
            <Projects/>
            <Features/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
