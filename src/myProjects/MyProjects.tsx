import React from 'react';
import style from './MyProjects.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Project from './project/Project';
import {Title} from '../common/components/title/title';
import socialImage from '../assets/image/socialNetwork.jpg'
import todoImage from '../assets/image/todo.jpg'
import changeImage from '../assets/image/change.jpg'
import cardsImage from '../assets/image/cards.jpg'



function MyProjects() {

    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const todo = {
        backgroundImage: `url(${todoImage})`
    };
    const change = {
        backgroundImage: `url(${changeImage})`
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`
    }


    return (
        <div className={style.projectsblock}>
            <div className={`${styleContainer.container} ${style.ProjectsContainer}`}>
                <Title title='My projects'/>
                <div className={style.projects}>
                    <Project style={social}  title={"Название проекта 1"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ."}/>
                    <Project style={todo} title={"Название проекта 2"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rerum, unde. "}/>
                    <Project style={change} title={"Название проекта 3"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rerum, unde. "}/>
                    <Project style={cards} title={"Название проекта 3"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rerum, unde. "}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
