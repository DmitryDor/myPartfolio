import React from 'react';
import style from './Remote.module.css';
import styleContainer from './../common/styles/Container.module.css'


function Remote() {
    return (
        <div className={style.projectsblock}>
            <div className={`${styleContainer.container} ${style.ProjectsContainer}`}>
                <h2 className={style.title}> Рассматриваю варианты удалённой работы </h2>
                <div>
                    <button className={style.button}>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Remote;
