import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Features} from "./components/features/Features";

function App() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Features/>
        </div>
    );
}

export default App;
