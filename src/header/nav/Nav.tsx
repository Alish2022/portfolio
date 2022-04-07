import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.navLink} href="">Главная</a>
            <a className={style.navLink} href="">Скиллы</a>
            <a className={style.navLink} href="">Работы</a>
            <a className={style.navLink} href="">Контакты</a>
        </div>
    );
};

export default Nav;