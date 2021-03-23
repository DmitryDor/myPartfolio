import React from 'react';
import './App.css';

import Skills from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import Remote from "./remote/Remote";
import Header from "./header/Header";
import Main from "./main/Main";
import Form from "./form/Form";
import Footer from "./footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects />
            <Remote />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
