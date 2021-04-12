import React from 'react';
import style from './Header.module.scss';
import Nav from "./nav/Nav";
import {BurgerNav} from "./byrgerNav/burgerNav";


export function Header() {

    return (
        <div className={style.headerBlock}>
                <Nav />
                <BurgerNav />
        </div>
    );
}


