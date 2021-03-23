import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={style.footerblock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Dmitry Doroshenko</h2>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>

                </div>
                <div>
                    <h2 className={style.title}>© 2020 Все права защищены</h2>
                </div>
            </div>
        </div>
    );
}

export default Footer;
