import React from "react";
import style from './button.module.scss'


export function Button(props) {
    return <button className={style.button}>{props.title}</button>
}