import React from 'react';
import './App.scss';

import {Contact} from './a6-contact/Contact';
import {Header} from './a1-header/Header';
import {Skills} from './a3-skills/Skills';
import { MyProjects } from './a4-projects/MyProjects';
import { Remote } from './a5-remote/Remote';
import {Footer} from "./a7-footer/Footer";
import Main from './a2-main/Main';


export function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Remote/>
            <Contact/>
            <Footer/>
        </div>
    );
}


