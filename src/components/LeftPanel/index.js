import React from 'react'
import { Link } from 'react-router-dom';

export default function LeftPanel({ img, details }) {

  return (
    <div className="panel left-panel">

      {details ? 
        <div className="content">
          <h3>{details.title}</h3>
          <p>{details.text}</p>
          <Link to={details.to}>
            <button className="btn transparent" id="sign-up-btn"> {details.textButton} </button>
          </Link>
        </div>

      :
        <div className="content">
          <h3>404 Page not found</h3>
        </div>        
        }
        <img src={img} className="image" alt="" />

      </div>
    )
}
