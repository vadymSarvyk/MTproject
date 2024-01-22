import React from 'react'
import './Forms.css'
import axios from 'axios';
import Cookies from 'js-cookie';

const ProgramDeleteForm = (props) => {
    
    const {categoryId, program} = props

    const handleDeleteSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete('http://localhost:5000/api/delete-program', {
                data: {
                    categoryId: categoryId,
                    programId: program._id,
                },
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            });
            console.log(response.data);
            window.location.reload()
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleDeleteSubmit}>
                
                <p style={{fontFamily: 'sans-serif'}}>Ви впевнені, що хочете видалити <b>{program.name}</b></p>
                <button className="submit delete" type="submit">Так, видалити</button>
            </form>
        </div>
    )
}

export default ProgramDeleteForm;