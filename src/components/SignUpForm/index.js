import React, { useState } from 'react'

//import apiUserFav from '../../services/apiUserFav';


export default function SignUpForm ({ history }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /*async function handleSubmit(event) {
    event.preventDefault();
    console.log('Registrar')
  }*/
  
    return (
        <>
          <form className="sign-form" >

            <h2 className="title">Registrar</h2>

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                placeholder="Informe seu e-mail" 
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

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
              type="password" 
              placeholder="Confirme sua senha" 
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
              />
            </div>

            <input type="submit" className="btn" value="Submeter" />
          </form>
            
        </>
    )
}
