import React from "react";
import style from './button.module.scss'


export function Button(props) {

const ref = props.target ? props.target:"_blank"

    return <a className={style.button} href={props.href} target={ref}>{props.title}</a>
}