import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Header.module.scss';
import Nav from "../nav/Nav";


function Header() {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
