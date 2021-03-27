import React from 'react';
import style from './Project.module.scss';


type PropsType = {
    title: string,
    description: string
    style: {backgroundImage: string}
}

function Project(props: PropsType) {
    return (
        <div className={style.project}>
            <div className={style.icon} style={props.style}>
                <button className={style.button}>view more</button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}> {props.description}</span>
            </div>
        </div>
    );
}


export default Project;
