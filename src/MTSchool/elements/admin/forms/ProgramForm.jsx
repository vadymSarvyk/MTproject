import React, { useState } from 'react'
import './Forms.css'
import axios from 'axios';
import Cookies from 'js-cookie';

const ProgramForm = (props) => {

    const { category, data } = props

    const [formData, setFormData] = useState({
        categoryId: category._id,
        name: data?.name ?? '',
        description: data?.description ?? '',
        type: data?.type ?? '',
        numberOfLessons: data?.numberOfLessons ?? '',
        lessonDuration: data?.lessonDuration ?? '',
        courseDuration: data?.courseDuration ?? '',
        coursePrice: data?.coursePrice ?? ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data) {
            try {
                const response = await axios.put('http://localhost:5000/api/update-program',
                {
                    categoryId: category._id,
                    programId: data._id,
                    updatedProgramData: formData
                }, {
                    headers: {
                        "Authorization": "Bearer " + Cookies.get('token')
                    }
                });
                console.log(response)
                window.location.reload()
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            try {
                console.log(category)
                const response = await axios.post('http://localhost:5000/api/create-program',formData, {
                    headers: {
                        "Authorization": "Bearer " + Cookies.get('token')
                    }
                });
                console.log(response)
                window.location.reload()
            } catch (error) {
                console.error('Error:', error);
            }
        }

        
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Назва програми</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Опис</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        cols="30" rows="10"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="categoryId">Категорія</label>
                    <h2 id="categoryId">{category.categoryName}</h2>
                </div>

                <div className="form-group">
                    <label htmlFor="type">Вид</label>
                    <select name="type" id="type" onChange={handleInputChange} value={formData.type}>
                        <option value="">Виберіть вид</option>
                        <option value="індивідуальне">Індивідуальне</option>
                        <option value="парне">Парне</option>
                        <option value="втрьом">Втрьом</option>
                        <option value="група">Група</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="numberOfLessons">Кількість занять</label>
                    <select name="numberOfLessons" id="numberOfLessons" onChange={handleInputChange} value={formData.numberOfLessons}>
                        <option value="">Виберіть кількість занять</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="індивідуально">Індивідуально</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="lessonDuration">Тривалість уроку</label>
                    <select name="lessonDuration" id="lessonDuration" onChange={handleInputChange} value={formData.lessonDuration}>
                        <option value="">Виберіть тривалість уроку</option>
                        <option value="45">45 хв</option>
                        <option value="60">60 хв</option>
                        <option value="80">80 хв</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="courseDuration">Тривалість курсу</label>
                    <input
                        type="text"
                        id="courseDuration"
                        name="courseDuration"
                        value={formData.courseDuration}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="coursePrice">Вартість курсу</label>
                    <input
                        type="number"
                        id="coursePrice"
                        name="coursePrice"
                        value={formData.coursePrice}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">{data ? "Редагувати програму" : "Додати програму"}</button>
            </form>
        </div>
    )
}

export default ProgramForm;