import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username: username,
        password: password
      });

      const token = response.data.token
      Cookies.set('token', token, { expires: 1 })
      window.location.reload(false);

    } catch (error) {
      console.error('Помилка!', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
        <h1 align="center">Авторизація</h1>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
  )
}

export default LoginForm;