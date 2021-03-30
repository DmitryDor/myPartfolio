import React from 'react';
import style from './contact.module.scss';
import {Title} from '../common/components/title/title';
import {Button} from "../common/components/button/Button";
import Fade from 'react-reveal/Fade';


export function Contact() {
    return (
        <div id='contacts' className={style.contactBlock}>
            <Fade left>
                <div className={style.contactContainer}>
                    <Title title={'Contacts'}/>
                    <form className={style.contactsForm}>
                        <input placeholder='your name'
                               type={'text'} className={style.formArea}/>
                        <input type={'text'} className={style.formArea} placeholder='e-mail'/>
                        <textarea className={style.messageArea} placeholder='send message'/>
                        <Button title='SEND MESSAGE' type='submit'/>
                    </form>
                </div>
            </Fade>
        </div>
    );
}
