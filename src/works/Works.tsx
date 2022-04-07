import React from 'react';
import style from './Works.module.css'
import containerStyles from './../common/styles/ContainerStyles.module.css'
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={style.works}>
            <div className={containerStyles.container}>
                <h2>Мои работы</h2>
                <div className={style.workItems}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

export default Works;