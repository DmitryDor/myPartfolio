import React from 'react';
import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faLinkedinIn, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
    return (
        <div className={style.footerblock}>
            <div className={`${style.footerContainer}`}>
                <h2 className={style.footerTitle}>Dmitry Doroshenko</h2>
                <div className={style.networkBlock}>
                    <a href="https://www.instagram.com/dorikdimam/"> <FontAwesomeIcon icon={faInstagram} size="2x" color=" #4e93e6" className={style.FontAwesomeIcon}/></a>
                    <a href="https://t.me/DmitryDoroshenko"> <FontAwesomeIcon icon={faTelegramPlane} size="2x" color=" #4e93e6" className={style.FontAwesomeIcon}/></a>
                    <a href="https://www.facebook.com/dorikdima"><FontAwesomeIcon icon={faFacebookSquare} size="2x" color=" #4e93e6"
                                                                                    className={style.FontAwesomeIcon}/></a>
                    <a href="https://www.linkedin.com/in/dmitry-doroshenko80"><FontAwesomeIcon icon={faLinkedinIn} size="2x" color=" #4e93e6" className={style.FontAwesomeIcon}/></a>

                </div>
                <div>
                    <h2 className={style.copyrightBlock}>© 2021 All Rights Reserved.</h2>
                </div>
            </div>
        </div>
    );
}


