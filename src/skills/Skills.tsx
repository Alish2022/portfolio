import React from 'react';
import style from './Skills.module.css'
import containerStyles from './../common/styles/ContainerStyles.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={containerStyles.container}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.items}>
                    <Skill skill='JS' description='asddada asdadad asdadafdfs adadad ada'/>
                    <Skill skill='CSS' description='asddada asdadad asdadafdfs adadad ada'/>
                    <Skill skill='React' description='asddada asdadad asdadafdfs adadad ada'/>
                </div>
            </div>
        </div>
    );
};

export default Skills;