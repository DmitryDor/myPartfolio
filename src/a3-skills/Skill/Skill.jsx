import React from 'react';
import style from './Skill.module.scss'



export function Skill(props) {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>{props.icon}</div>
            <div className={style.skillInfo}>
                <h3 className={style.skillTitle}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}



