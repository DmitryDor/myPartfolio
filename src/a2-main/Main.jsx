import React from 'react';
import style from './Main.module.scss';
import me from '../b2-assets/image/me.jpg'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


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
            <Fade left>
                <div className={`${style.mainContainer}`}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am <br/> Dmitry Doroshenko</h1>
                        <ReactTypingEffect
                            text='Frontend Developer' className={style.typingEffect}
                        />
                    </div>
                    <Tilt className={style.Tilt} options={{ max : 25 }}  >
                        <div className={style.fotoContainer}>
                            <img className={style.foto} src={me} alt='Me'/>
                        </div>
                    </Tilt>

                </div>
            </Fade>

        </div>
    )
        ;
}

export default Main;
