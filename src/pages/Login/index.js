import React from 'react';

import img from '../../assets/register.png';

import SignInForm from '../../components/SignInForm';
import LeftPanel from '../../components/LeftPanel';


export default function Login({ history }) {

  const details = {
    title: 'Novo por aqui ?',
    text: 'Registre-se para acompanhar informações das suas séries de tv favoritas. É gratuito!',
    textButton: 'Registrar',
    to: '/register'
  }

  return (
    <div className="container">
      <div className="forms-content">
        <div className="signs-forms">
          <SignInForm history={history} />
        </div>
      </div>

      <div className="panels-content">
        <LeftPanel img={img} details={details}/>
      </div>
    </div>
  )
}