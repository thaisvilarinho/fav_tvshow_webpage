import React, { useState } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import './styles.css';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/login', { email, password });

    const { id } = response.data;

    localStorage.setItem('user', id);

    history.push('/home');
  }

  return (
    <div className="container">
      <img src={logo} alt='logo'/>
      <div>
      <p id='errorMessage'> Email ou senha inválidos </p>
        <form onSubmit={handleSubmit} className="content">
          <div className='inputContent'>
            <input 
              id="email" 
              type="email" 
              placeholder="E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className='inputContent'>
            <input 
              id="password" 
              type="password" 
              placeholder="Senha"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}