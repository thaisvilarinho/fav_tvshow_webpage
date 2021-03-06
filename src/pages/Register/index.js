import React from 'react';

import img from '../../assets/login.png';

import SignUpForm from '../../components/SignUpForm';
import LeftPanel from '../../components/LeftPanel';


export default function Register({ history }) {

  const details = {
    title: 'Já possui uma conta?',
    text: 'Acesse pelo login e comece a explorar as informações de várias séries nacionais e internacionais',
    textButton: 'Logar',
    to: '/'
  }

  return (
    <div className="container">
      <div className="forms-content">
        <div className="signs-forms">
          <SignUpForm history={history} />
        </div>
      </div>

      <div className="panels-content">
        <LeftPanel img={img} details={details}/>
      </div>
    </div>
  )
}
