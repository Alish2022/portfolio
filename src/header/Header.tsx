import React from 'react';
import style from './Header.module.css'
import Nav from "./nav/Nav";
import containerStyles from './../common/styles/ContainerStyles.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={containerStyles.container}>
                <div className={style.wrapper}>
                    <Nav/>
                </div>
            </div>
        </div>
    );
};

export default Header;