import React, {useContext} from 'react';
import cl from "./AlertError.module.css"

const AlertError = ({visible, setVisible, children, timeout = 2000}) => {

    // Таймер на автоматическое закрытие
    setTimeout(() => {
        if (visible) {
            setVisible(false);
        }
    }, timeout);

    if (!visible) {
        return (<div></div>);
    }

    return (
        <div className={cl.error_alert}>
            <div className={cl.error_content}>
                {children}
            </div>

            <div className={cl.close_button}>
                <button onClick={() => setVisible(false)}><i className="fa fa-times" aria-hidden="true"></i></button>
            </div>
        </div>
    );
};

export default AlertError;
