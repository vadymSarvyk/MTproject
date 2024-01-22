import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './Programs.css'
import ProgramCollapsibleTable from './ProgramCollapsibleTable'

const Programs = () => {

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
            <h2>Освітні програми</h2>
            <ProgramCollapsibleTable rows={categories} />
        </div>
    );
};

export default Programs;