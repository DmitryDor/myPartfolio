import React from 'react';
import style from './Project.module.scss';
import {Button} from "../../common/components/button/Button";


type PropsType = {
    title: string,
    description: string
    style: { backgroundImage: string }
}

export function Project(props: PropsType) {
    return (
        <div className={style.project}>
            <div className={style.icon} style={props.style}>
                <Button title='view more'/>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}> {props.description}</span>
            </div>
        </div>
    );
}



