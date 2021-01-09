import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import NoImage from '../../image/no-image.jpg';
import apiTvMaze from '../../services/apiTvMaze';

import apiUserFav from '../../services/apiUserFav';


import './styles.css'

const Details = (props) => {

  const { showData, favoriteArray } = props.location.state;
  const { id, image, premiered, name, genres, rating, language, network } = showData;

  const premieredYear = premiered.split('-');

  const [ seasonPoster, setseasonPoster ] = useState('');
  const [favoriteShow, setFavoriteShow] = useState(false);

  useEffect(()=>{
    if(favoriteArray.includes(id)){
      setFavoriteShow(true);
    }
  },[])

  useEffect(()=>{
    async function loadSeasons(){
      await apiTvMaze.get(`/shows/${id}/seasons`)
      .then(response => {
        const { data } = response;

        if(data){
          const lastSeason = data.length - 1;

          if(lastSeason > 0){
            let posterImage = {
              posterSeason: `${data[lastSeason].image.original ? data[lastSeason].image.original : NoImage}`
            }
            setseasonPoster(posterImage)
          }else{
            let posterImage = {
              posterSeason: `${image.original ? image.original : NoImage}`
            }
            setseasonPoster(posterImage)
          }
        }
      });
    }
    loadSeasons()
  },[])

  async function handleRequest(){
    const userId = localStorage.getItem('user');

    if(favoriteShow){

      await apiUserFav.delete('/deleteFavoriteShow', { 
        headers: { Authorization: userId,
        data: id }
      });
      setFavoriteShow(false)
    }else{
      await apiUserFav.post('/addFavoriteShow',{ userId, id })
      setFavoriteShow(true)
    }
  };
  
  return (
    <>
    <Navbar />

      {seasonPoster ? 
      <>
        <header style={{
          backgroundImage: `url(${image.original})`,
          
          
        }}
        > 
          <div className="show-poster">
            <img src={seasonPoster.posterSeason} alt={name}/>

            <section className="column-container">
              <div className="content-info">
                <p className="info-text">{`${premieredYear[0]} • ${genres}`}</p>
              </div>
              <div className="row-container">
                <span className="show-detail">{rating.average ? rating.average : ''}</span>
                <span className="show-detail">{language ? language : ''}</span>
                <span className="show-detail">{network.name ? network.name : ''}</span>
                <span className="show-detail">{network.country.name ? network.country.name : ''}</span>
                <span>
                  <button className="favIcon-button" onClick={()=> handleRequest()}>
                    <i 
                      className={favoriteShow ? "fas fa-heart" : "far fa-heart" } 
                        style={{
                            color:`${favoriteShow ? '#cf112b' : "#fff"}`, 
                              fontSize:30,
                              padding: 10,
                              borderRadius: 8 }}>
                    </i>
                  </button>
                </span>
              </div>
            </section>
          
          </div>
        </header>
        <div className="line"></div>



      </>
        :
        <div className="loading">
          <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando"/>
        </div>
      } 
    </>

    
  );
}

export default Details;
