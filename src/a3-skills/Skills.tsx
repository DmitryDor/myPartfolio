import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css'

import {Title} from '../common/components/title/title';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faFileCode} from '@fortawesome/free-solid-svg-icons';
import { Skill } from './Skill/Skill';




function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title='Skills'/>
                <div className={style.skills}>
                    <Skill icon={<FontAwesomeIcon icon={faJs} size='6x'/>} title={'JAVASCRIPT'}
                           description={'Description of knowledge in JS sifgiusiufhishfh  fsdfdff'}/>
                    <Skill icon={<FontAwesomeIcon icon={faHtml5} size='6x'/>} title={'HTML'}
                           description={'Description of knowledge in HTML '}/>
                    <Skill icon={<FontAwesomeIcon icon={faFileCode} size='6x'/>} title={'CSS '}
                           description={'Description of knowledge in CSS Description of knowledge in JS ' +
                           'sifgiusiufhishfh ' + ' fsdfdff Description of knowledge in JS sifgiusiufhishfh  ' +
                           'fsdfdffDescription of knowledge in' +
                           ' JS sifgiusiufhishfh  fsdfdff'}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact} size='6x'/>} title={'REACT'}
                           description={'Description of knowledge in CSS '}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;