import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import me from '../assets/image/me.jpg'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>

                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1 className={style.forPsevdo}>I am <br/> Dmitry Doroshenko</h1>
                        <p>Frontend Developer</p>
                    </div>
                <div className={style.fotoContainer}>
                    <img className={style.foto} src={me} alt='Me'/>
                </div>





            </div>
        </div>
    );
}

export default Main;
