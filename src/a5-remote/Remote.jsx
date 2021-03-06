import React from 'react';
import style from './Remote.module.scss';
import {Title} from '../common/components/title/title';
import {Button} from "../common/components/button/Button";
import Fade from 'react-reveal/Fade';


export function Remote() {
    return (
        <div className={style.remoteBlock}>
            <Fade right>
                <div className={`${style.remoteContainer}`}>
                    <div className={style.titleBlock}>
                        <Title title='I Am Available For Freelancer'/>
                    </div>
                    <Button title='HIRE ME'/>
                    {/*<button className={style.button}>HIRE ME</button>*/}

                </div>
            </Fade>
        </div>
    );
}


