import React, { useState, useEffect } from 'react';

import ListRow from '../../components/ListRow';
import Navbar from '../../components/Navbar';

import './styles.css';

import apiTvMaze, { ShowsByGenre } from '../../services/apiTvMaze';
import apiUserFav from '../../services/apiUserFav';

export default function Home() {

  const [ searchShow, setSearchShow ] = useState(null);
  const [ listShowsByGenre, setListShowsByGenre ] = useState([]);
  const [ listShowsBySearch, setListShowsBySearch ] = useState([]);
  const [ loadIsFavorite, setLoadIsFavorite ] = useState([]);


  useEffect(()=>{
    getIsFavorite();
    async function getShowsByGenre(){
      const response = await ShowsByGenre();
      if (response && loadIsFavorite){
        setListShowsByGenre(response);
      }
    }
    getShowsByGenre();
  },[]);

    async function getIsFavorite(){
      const user_id = localStorage.getItem('user');
      const response = await apiUserFav.get('/getIsFavorite', { 
        headers: { user_id }
       });
       const { data } = response;
      if (data){
        const idFavoritedShows = []
        data.filter((item)=>{
          let showId = item.idShow
          idFavoritedShows.push(showId)
      })
      setLoadIsFavorite(idFavoritedShows)
      }
    }


  async function handleRequest(){
    const response = await (await apiTvMaze.get(`/search/shows?q=${searchShow}`));
    const { data } = response;

    if (data && searchShow && loadIsFavorite){
      const allShowsBySearch = []
      
      data.filter((item) =>{
        let shows = item.show
        return allShowsBySearch.push(shows)
      })
      setListShowsBySearch(allShowsBySearch)
    }
  }

  return (
    <div className='page'>
      <Navbar />
      
      <div className="search-wrap">
        <div className="search-box">
          <input 
            type="text" 
            autoCorrect={false}
            autoCapitalize='none'
            className="input" 
            placeholder="Encontre sua série favorita"
            onChange={event => setSearchShow(event.target.value)} 
          />
          <button className="search-btn" onClick={()=> handleRequest()}>
            <i className="fas fa-search" />
          </button>
        </div>
	   </div>

      <section className="lists">
      {
        searchShow ?
        <ListRow list={listShowsBySearch} title={'Search'} key={'Search'} isFavorite={loadIsFavorite} />
        :
        listShowsByGenre.map((array, index)=>{
          const { genre, shows } = array;

          return (
            <ListRow key={index} title={genre} list={shows} isFavorite={loadIsFavorite}/>
          )
        })
      }
      </section>

      {listShowsByGenre.length <= 0 && loadIsFavorite.length <=0 &&
        <div className="loading">
          <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando"/>
        </div>
      }


    </div>
  )
}