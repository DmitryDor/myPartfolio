import React, {useState} from 'react';
import style from './burgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";
import Fade from 'react-reveal/Fade';

export const BurgerNav = () => {

    let [menuIsOpen, setMenuIsOpen] = useState(false)

    let onShowBurger = () => {
        setMenuIsOpen(!menuIsOpen)
    }


    return (
        <div className={style.burgerNav}>
            {menuIsOpen && <Fade top cascade>
                <div className={style.burgerNavItems}>

                    <Link
                        activeClass={style.active} to="main"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Main</Link>

                    <Link
                        activeClass={style.active} to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Skills</Link>

                    <Link
                        activeClass={style.active} to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link>

                    <Link
                        activeClass={style.active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contacts</Link>

                </div>
            </Fade>}

            <div className={style.hamburger} onClick={onShowBurger}></div>
        </div>
    );
}




