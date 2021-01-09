import React, { useState, useEffect } from 'react';

import apiUserFav from '../../services/apiUserFav';
import apiTvMaze from '../../services/apiTvMaze';

import ListRow from '../../components/ListRow';
import Navbar from '../../components/Navbar';


export default function Favorites() {

  const [ loadIsFavorite, setLoadIsFavorite ] = useState([]);
  const [ listAllFavoriteShows, setListAllFavoriteShows ] = useState([]);

  useEffect(()=>{
    async function getIsFavorite(){
      const idFavoritedShows = []
      const user_id = localStorage.getItem('user');
      const response = await apiUserFav.get('/getIsFavorite', { 
        headers: { user_id }
       });
       const { data } = response;
      if(data){
        data.filter((item)=>{
          let showId = item.idShow;
          return idFavoritedShows.push(showId)
        })
        setLoadIsFavorite(idFavoritedShows)
      }
    }
    getIsFavorite()
  },[]);

  useEffect(()=>{
    async function getlistAllFavoriteShows(){
      const arrayAllFavoritedShows = []
      loadIsFavorite.map(async (id)=>{
        const responseShows = await apiTvMaze.get(`/shows/${id}`);
        if (responseShows){  
          arrayAllFavoritedShows.push(responseShows)
        }
        setListAllFavoriteShows(arrayAllFavoritedShows)
  
      })
    }

    getlistAllFavoriteShows()
  },[])



  return (
    <>
      <Navbar />
      <ListRow key={'Favorite'} title={'Shows Favoritados'} list={listAllFavoriteShows} isFavorite={loadIsFavorite}/>
    </>

  )
}