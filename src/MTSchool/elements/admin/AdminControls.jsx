import React from 'react';
import './AdminControls.css'
import Cookies from 'js-cookie';
import ProgramCategoryForm from './forms/ProgramCategoryForm';
import ProgramForm from './forms/ProgramForm';
import Programs from './elements/Programs';
import News from './elements/News';

const AdminControls = () => {

    const Logout = () => {
        Cookies.remove('token')
        window.location.reload(false);
    }

    return (
        <div className="wrapper">
            <header>
                <h1>Адміністративна панель</h1>
                <button onClick={Logout} className="logout-button">Вийти</button>
            </header>
            <div className="content">
                <Programs />
                <News />
            </div>
            
        </div>
    );
};

export default AdminControls;