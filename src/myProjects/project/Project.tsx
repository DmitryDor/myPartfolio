import React from 'react';
import style from './Project.module.css';


type PropsType = {
    title: string,
    description: string
}

function Project(props: any) {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button className={style.button}>Look</button>
            </div>
            <span className={style.description}>{props.title} {props.description}</span>
        </div>
    );
}


export default Project;
