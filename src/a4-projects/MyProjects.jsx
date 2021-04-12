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
                        <Project style={todo} title={"ToDo"} href={'https://DmitryDor.github.io/MyTodolist/'}
                                 description={"Technologies: React, Redux, REST API, Typescript, Material-UI," +
                                 " Storybook, Unit-tests, IN PROGRESS "}/>
                        <Project style={change} title={"Currency Exchange"} href={'https://DmitryDor.github.io/Currency_exchange/'}
                                 description={"Technologies: React, Redux, Typescript "}/>
                        <Project style={cards} title={"Cards Questions"}
                                 description={"Technologies: React, Redux, REST API, Typescript, Formik, Material-UI, Unit-tests "}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}


