import React from "react";
import style from './button.module.scss'

type PropsType = {
    title: string
    type?: string
}

export function Button(props: PropsType) {
    return <button className={style.button}>{props.title}</button>
}