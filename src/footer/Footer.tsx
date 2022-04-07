import React from 'react';
import style from './Footer.module.css'
import containerStyles from './../common/styles/ContainerStyles.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={containerStyles.container}>
                <h2 className={style.title}>Рзаев Алиш</h2>
                <div className={style.footerBlocks}>
                    <div className={style.footerBlock}></div>
                    <div className={style.footerBlock}></div>
                    <div className={style.footerBlock}></div>
                    <div className={style.footerBlock}></div>
                </div>
                <div className={style.copyrightWrapper}>
                    <span className={style.copyright}>&copy; 2022 Все права защищены</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;