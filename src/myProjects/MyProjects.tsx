import React from 'react';
import style from './MyProjects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";


function MyProjects() {
    return (
        <div className={style.projectsblock}>
            <div className={`${styleContainer.container} ${style.ProjectsContainer}`}>
                <h2 className={style.title}> My projects</h2>
                <div className={style.projects}>
                    <Project title={"Название проекта 1"} description={"Описание проекта 1"}/>
                    <Project title={"Название проекта 2"} description={"Описание проекта 2"}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
