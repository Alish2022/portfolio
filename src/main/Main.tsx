import React from 'react';
import style from './Main.module.css'
import containerStyles from './../common/styles/ContainerStyles.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={containerStyles.container}>
                <div className={style.wrapper}>
                    <div className={style.text}>
                        <span>Привет</span>
                        <h1>Меня зовут Алиш</h1>
                        <p>Я фронтенд разработчик</p>
                    </div>
                    <div className={style.photo}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;