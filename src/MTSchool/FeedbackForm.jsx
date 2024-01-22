import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    function validateForm() {
        return email.length > 0 && name.length > 0 && phone.length > 0 && message.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validateForm()) {
            alert('Please fill in all fields.');
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Phone', phone);
        formData.append('Message', message);

        axios.post("https://script.google.com/macros/s/AKfycbwrT670bDonK60UOfjVgxxZZFgpkFg6-cxYfrmWTSVMAYQbfll3esu1TGLRazrvcVjlIw/exec", formData)
        .then(response => {
          setLoading(false);
          
        })
        .catch(error => {
          setLoading(false);
        });
    }

    return (
        <div className="form">
          {/* Прелоадер */}
          {loading && <div className="overlay">
            <div className="loader"></div>
          </div>}

          <div className="form-container">
            <h1 className="form-header">Напишіть нам і ми Вам зателефонуємо!</h1>
            <h2 className="form-subheader">Як до Вас звертатися</h2>
            <form className="form" onSubmit={handleSubmit}>
              <input 
                placeholder="Ваше ім'я" 
                value={name}
                onChange={e => setName(e.target.value)}
                type="text" 
              />
              <input 
                placeholder="Ваш e-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
              />
              <input 
                placeholder="Номер телефону" 
                value={phone}
                onChange={e => setPhone(e.target.value)}
                type="tel"
              />
              <textarea 
                placeholder="Коротко опишіть Ваші побажання до курсу"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <input type="submit" value="Відправити" />
            </form>
          </div>
        </div>
      );
}

export default FeedbackForm
