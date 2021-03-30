import React from 'react';
import style from './title.module.scss'



export const Title = (props) => {
    return (
        <div className={style.title}>
            <h2> {props.title}</h2>
        </div>
    )
}