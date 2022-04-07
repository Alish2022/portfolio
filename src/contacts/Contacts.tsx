import React from 'react';
import style from './Contacts.module.css'
import containerStyles from './../common/styles/ContainerStyles.module.css'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={containerStyles.container}>
                <h2 className={style.title}>Контакты</h2>
                <div className={style.formWrapper}>
                    <form className={style.form} action="">
                        <input className={style.inputForm} type="text"/>
                        <input className={style.inputForm} type="text"/>
                        <textarea className={style.textarea} name="" id="" cols={30} rows={10}></textarea>
                        <input type="submit" value="Отправить"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;