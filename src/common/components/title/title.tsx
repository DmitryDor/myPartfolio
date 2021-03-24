import React from 'react';
import style from './title.module.scss'

export type PropsType = {
    title: string
}

export const Title = (props: PropsType) => {
    return (
        <div className={style.title}>
            <h2> {props.title}</h2>
        </div>
    )

}