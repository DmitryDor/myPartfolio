import React from 'react';
import style from './MyProjects.module.scss';
import {Title} from '../common/components/title/title';
import socialImage from '../b2-assets/image/socialNetwork.jpg'
import todoImage from '../b2-assets/image/todo.jpg'
import changeImage from '../b2-assets/image/change.jpg'
import cardsImage from '../b2-assets/image/cards.jpg'
import {Project} from "./project/Project";
import Fade from 'react-reveal/Fade';


export function MyProjects() {

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
        <div id='projects' className={style.projectsBlock}>
            <Fade left>
                <div className={`${style.projectsContainer}`}>
                    <Title title='My projects'/>
                    <div className={style.projects}>
                        <Project style={social} title={"Название проекта 1"}
                                 description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ."}/>
                        <Project style={todo} title={"Название проекта 2"}
                                 description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rerum, unde. "}/>
                        <Project style={change} title={"Название проекта 3"}
                                 description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rerum, unde. "}/>
                        <Project style={cards} title={"Название проекта 3"}
                                 description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rerum, unde. "}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}


