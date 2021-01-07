import React, { useState } from 'react'

import apiUserFav from '../../services/apiUserFav';

export default function SignInForm ({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await apiUserFav.post('/login', { email, password });
  
      const { id } = response.data;
  
      localStorage.setItem('user', id);
  
      history.push('/home');
    }

    return (
        <>
            <form className="sign-form" onSubmit={handleSubmit}>

                <h2 className="title">Logar</h2>

                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input 
                        type="password" 
                        placeholder="Informe sua senha" 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn solid">Entrar</button>
          </form>
            
        </>
    )
}
