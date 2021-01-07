import React, { useState, useEffect } from 'react';

import ListRow from '../../components/ListRow';
import Navbar from '../../components/Navbar';

import ShowsByGenre from '../../services/apiTvMaze';

export default function Home() {

  const [ listShowsByGenre, setListShowsByGenre ] = useState([]);

  useEffect(()=>{
    getShowsByGenre()
    return() =>{
    }
  },[]);

  async function getShowsByGenre(){
    const response = await ShowsByGenre();
    setListShowsByGenre(response);
  }; 


  return (
    <div className='page'>
      <Navbar />

      <section className="lists">
      {
        listShowsByGenre.map((array, index)=>{
          const { genre, shows } = array;

          return (
            <ListRow key={index} title={genre} list={shows}/>
          )
        })
      }
      </section>

      {listShowsByGenre.length <= 0 &&
        <div className="loading">
          <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando"/>
        </div>
      }


    </div>
  )
}