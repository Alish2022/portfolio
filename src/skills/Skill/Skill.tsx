import React from 'react';
import style from './Skill.module.css'

type PropsType={
    skill:string,
    description:string
}

const Skill = (props:PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.skill}</h3>
            <span>{props.description}</span>
        </div>
    );
};

export default Skill;