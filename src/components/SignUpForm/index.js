import React from 'react'


export default function SignUpForm () {
  
    return (
        <>
          <form className="sign-form" >

            <h2 className="title">Registrar</h2>

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                placeholder="Informe seu e-mail" 
              />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
              type="password" 
              placeholder="Informe sua senha" 
              />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
              type="password" 
              placeholder="Confirme sua senha" 
              />
            </div>

            <input type="submit" className="btn" value="Submeter" />
          </form>
            
        </>
    )
}
