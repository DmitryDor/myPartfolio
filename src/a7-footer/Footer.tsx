import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faLinkedinIn, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
    return (
        <div className={style.footerblock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.footerTitle}>Dmitry Doroshenko</h2>
                <div className={style.networkBlock}>
                    <a href=""> <FontAwesomeIcon icon={faInstagram} size="2x" color=" #4e93e6" className={style.FontAwesomeIcon}/></a>
                    <a href="https://t.me"> <FontAwesomeIcon icon={faTelegramPlane} size="2x" color=" #4e93e6" className={style.FontAwesomeIcon}/></a>
                    <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} size="2x" color=" #4e93e6"
                                                                                    className={style.FontAwesomeIcon}/></a>
                    <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} size="2x" color=" #4e93e6" className={style.FontAwesomeIcon}/></a>

                </div>
                <div>
                    <h2 className={style.copyrightBlock}>© 2021 All Rights Reserved.</h2>
                </div>
            </div>
        </div>
    );
}


