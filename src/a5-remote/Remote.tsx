import React from 'react';
import style from './Remote.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import { Title } from '../common/components/title/title';


function Remote() {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <div className={style.titleBlock}>
                    <Title title='I Am Available For Freelancer'/>
                   {/* <h2 className={style.title}> Рассматриваю варианты удалённой работы </h2>
                    <div className={style.lineStale}></div>*/}
                </div>

                <div>
                    <button className={style.button}>HIRE ME </button>
                </div>
            </div>
        </div>
    );
}

export default Remote;
