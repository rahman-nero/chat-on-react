import React from 'react';
import cl from './Loader.module.css'

const Loader = () => {

    return (
        <div className={cl.loader}>
            <div className={cl.center}>
                <div className={cl.circle}></div>
                <div className={cl.text_loading}>Загрузка</div>
            </div>
        </div>
    );
};

export default Loader;