import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import style from './Header.module.scss';
import Nav from "../b1-nav/Nav";


export function Header() {
    return (
        <div className={style.headerBlock}>
                <Nav/>
        </div>
    );
}


