import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active} to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Main</Link>
            {/*<a href="#main" className={style.a}>Main</a>*/}
                <Link
                    activeClass={style.active} to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Skills</Link>
            {/*<a href="#skills" className={style.a} >Skills</a>*/}
                    <Link
                        activeClass={style.active} to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link>
            {/*<a href="#projects" className={style.a}>Projects</a>*/}
                        <Link
                            activeClass={style.active}
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contacts</Link>
            {/*<a href="#contacts" className={style.a}>Contacts</a>*/}
        </div>
    );
}

export default Nav;
