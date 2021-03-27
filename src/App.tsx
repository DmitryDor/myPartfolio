import React from 'react';
import './App.css';

import Skills from "./a3-skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import Header from "./a1-header/Header";
import Main from "./a2-main/Main";
import Footer from "./footer/Footer";
import { Contact } from './contact/Contact';
import Remote from './a5-remote/Remote';



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects />
            <Remote />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
