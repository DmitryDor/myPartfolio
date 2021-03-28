import React from 'react';
import style from './Main.module.scss';
import me from '../b2-assets/image/me.jpg'
import Particles from 'react-particles-js'
import { Fade } from "react-awesome-reveal";


function Main() {

    const particlesOptions = {
        "particles": {
            "number": {
                "value": 150,
                "dansity": {
                    "enable": true,
                    "value_area": 800
                }
            },
        },
    };


    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <Fade direction={"left"}>
                <div className={`${style.mainContainer}`}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am <br/> Dmitry Doroshenko</h1>
                        <p>Frontend Developer</p>
                    </div>
                    <div className={style.fotoContainer}>
                        <img className={style.foto} src={me} alt='Me'/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Main;
