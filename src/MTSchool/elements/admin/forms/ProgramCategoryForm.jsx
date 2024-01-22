import React, { useState } from 'react'
import './Forms.css'
import axios from 'axios';
import Cookies from 'js-cookie';

const ProgramCategoryForm = (props) => {
    
    const {categoryName, description} = props

    const [categoriesData, setCategoriesData] = useState({
        categoryName: categoryName ?? '',
        description: description ?? '',
    });

    const handleCategoryInputChange = (e) => {
        setCategoriesData({ ...categoriesData, [e.target.name]: e.target.value });
    };

    const handleCategorySubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/create-program-category',categoriesData, {
                headers: {
                    "Authorization": "Bearer " + Cookies.get('token')
                }
            });
            console.log(response)
            window.location.reload()
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleCategorySubmit}>
                <div className="form-group">
                    <label htmlFor="categoryName">Назва категорії</label>
                    <input
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        value={categoriesData.categoryName}
                        onChange={handleCategoryInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Опис</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        cols="30" rows="10"
                        value={categoriesData.description}
                        onChange={handleCategoryInputChange}
                    />
                </div>

                <button className="submit" type="submit">Додати категорію</button>
            </form>
        </div>
    )
}

export default ProgramCategoryForm;