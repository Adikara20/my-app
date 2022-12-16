import React, { useEffect, useState } from 'react'
import notificationicon from "../../Icons/notification.png"
import profileimage from "../../Images/pexels-marlene-leppänen-1183266.jpg"
import searchicon from "../../Icons/search.png"
import "./maincontainers.css"
import { detailAnime, getAnimeList,searchAnime } from '../../Service/Service'

export default function Maincontainers() {
  const [popularAnime, setPopularAnime] = useState([])
  const [isShown, setIsShown] = useState(false);
  const [detailxs, setPopularAnimeDetail] = useState();

  const handleClick = (param) => {
    setIsShown(current => !current);
    //console.log(event)
    //setParam(param)
    console.log("sini")
    detail(param)
  };

  //console.log({isParam: isParam})

  useEffect(() => {
    //setPopularAnime(getAnimeList())
    getAnimeList().then((results) => {
      setPopularAnime(results)
    })
  }, [])

  //console.log({popularAnimess: popularAnime.data})

  const PopularAnimesList = () => {
    return popularAnime.data?.map((anime) => {
      return (
        <div className='AnimeWrapper' key={anime.mal_id}>
          <div className='AnimeTittle'>{anime.title}</div>
          <div className='AnimeTittleJpn'>{anime.title_japanese}</div>
          <img className='AnimeImage' src={anime.images.jpg.image_url} alt=''/>
          <div className='AnimeEpisode'>Episode : {anime.episodes}</div>
          <div className='AnimeDuration'>Duration : {anime.duration}</div>
          <div className='AnimeScore'>Score : {anime.score}</div>
          <button className='ButtonWath' onClick={event => handleClick(event, anime.mal_id)}>
            Watch Trailer
          </button>
        </div>
      )
    })
  }

  const search = async (q) => {
    if(q.length > 3){
      const query = await searchAnime(q)
      setPopularAnime(query)
      //console.log({query : query})
    } else if(q.length === 0){
      getAnimeList().then((results) => {
        setPopularAnime(results)
      })
    }
  }

  const detail = async (q) => {
      const datas = await detailAnime(q)
      console.log({querydatas : datas})
      setPopularAnimeDetail(datas)
  }


  return (
    <div className='mainContainer'>
      <div className='mainNavbar'>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{display: "flex", alignItems: "center", marginLeft: "20px",}}>
            <img src={`${searchicon}`} className='searchicon' alt=''/>
            <input 
              type="search" 
              placeholder=' search . . . ' 
              className='serachbar'
              onChange={({target}) => search(target.value)}
            />
          </div>
            <div style={{display: "flex", alignItems: "center", marginRight: "20px"}}>
              <img src={`${notificationicon}`} className='notificationicon' alt=''/>
              <img src={`${profileimage}`} className='profileimage' alt=''/>
              <p className='profilename'>Septia Dian Adikara</p>
            </div>
        </div>
      </div>
      {isShown && detailxs !== undefined && (
        <div>
          <div className='AnimeWrapperDet'>
            <div className='AnimeTittleDet'>{detailxs.title}</div>
            <div className='AnimeTittleJpnDet'>{detailxs.title_japanese}</div>
            <iframe height="480" width="720" src={detailxs.trailer.embed_url}></iframe>
            <div className='AnimeEpisodeDet'>Episode : {detailxs.episodes}</div>
            <div className='AnimeDurationDet'>Duration : {detailxs.duration}</div>
            <div className='AnimeSynopsisDet'>Synopsis : {detailxs.synopsis}</div>
          </div>
        </div>
      )}
      {isShown}
      <div className='AnimeContainer'>
        <PopularAnimesList/>
      </div>
    </div>
  )
}
