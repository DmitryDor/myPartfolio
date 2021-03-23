import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Dmitry Doroshenko</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.foto}></div>
            </div>
        </div>
    );
}

export default Main;
