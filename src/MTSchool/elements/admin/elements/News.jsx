import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import ProgramCollapsibleTable from './ProgramCollapsibleTable'
import NewsTable from './NewsTable';

const News = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/get-program-categories')
                setCategories(response.data)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchCategories()
    }, [])

    return (
        <div className="control">
            <h2>Новини</h2>
            <NewsTable rows={categories} />
        </div>
    );
};

export default News;