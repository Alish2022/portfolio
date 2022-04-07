import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div className={style.work}>
            <div className={style.img}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.textBlock}>
                <h3>Название</h3>
                <p>Краткое описание</p>
            </div>
        </div>
    );
};

export default Work;