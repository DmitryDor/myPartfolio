import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="" className={style.a}>Main</a>
            <a href="" className={style.a} >Skills</a>
            <a href="" className={style.a}>Projects</a>
            <a href="" className={style.a}>Contacts</a>
        </div>
    );
}

export default Nav;
