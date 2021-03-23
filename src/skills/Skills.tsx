import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "../Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsblock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`} >
               <h2 className={style.title}> Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Description of knowledge in JS"}/>
                    <Skill title={"HTML"} description={"Description of knowledge in HTML "}/>
                    <Skill title={"CSS"} description={"Description of knowledge in CSS "}/>
                </div>
            </div>
        </div>
    );
}
export default Skills;
