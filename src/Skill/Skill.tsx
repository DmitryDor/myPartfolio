import React from 'react';
import style from './Skill.module.scss';

type PropsType = {
    title: string,
    description: string
    icon: any
}

function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>{props.icon}</div>
            <div className={style.skillInfo}>
                <h3 className={style.skillTitle}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}

export default Skill;

