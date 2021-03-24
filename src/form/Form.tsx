import React from 'react';
import style from './Form.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "../Skill/Skill";

function Form() {
    return (
        <div className={style.formblock}>
            <div className={`${styleContainer.container} ${style.formContainer}`}>
                <h2 className={style.title}> Контакты </h2>
                <form className={style.form}>
                    {/*<div className={style.inputAll}>*/}
                        <input type="text" placeholder={"Введите текст"}/>
                        <input type="text" placeholder={"Введите текст"}/>
                        <textarea placeholder="Введите информацию в текстовое поле"></textarea>
                        <button type='submit'>Отправить</button>
                    {/*</div>*/}
                </form>
            </div>
        </div>
    );
}

export default Form;
