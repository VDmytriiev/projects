import React, { useState, useEffect } from 'react'
import './index.css'
import { URL } from './App'
import { API_KEY } from './App'


export const MovieDesc = (props) => {
  const { selectedFilm, onFilmSelected } = props
  const [singleFilm, setSingleFilm] = useState({})
  useEffect(() => {
    fetch(`${URL}?i=${selectedFilm}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setSingleFilm(result)
      })
  }, [selectedFilm]);

  const { Poster, Title, Runtime, Year, Type, Production, Genre, BoxOffice, Released, imdbRating, Plot } = singleFilm

  return (
    <div className='film'>
      {singleFilm ? <>
        <div className='film-container'>
          <img src={Poster} alt={Title} className='posterFilm'></img>
          <div className='desc'>
            <div className='TT'>
              <div className='Type'>{Type} :</div>
              <div className='Title'>{Title}</div>
            </div>
            <div className='moreInfo'>
              <div className='year-info'>
                <div className='Year'>Year:</div>
                <div className='Year-body'>{Year}</div>
              </div>
              <div className='runtime-info'>
                <div className='Runtime'>Runtime:</div>
                <div className='Runtime-body'>{Runtime}</div>
              </div>
              <div className='production-info'>
                <div className='Production'>Production:</div>
                <div className='Production-body'>{Production}</div>
              </div>
              <div className='genre-info' >
                <div className='Genre'>Genre:</div>
                <div className='Genre-body'>{Genre}</div>
              </div >
              <div className='released-info' >
                <div className='Released'>Released:</div>
                <div className='Released-body'>{Released}</div>
              </div >
              <div className='imdbRating-info' >
                <div className='imdbRating'>IMDB Rating:</div>
                <div className='imdbRating-body'>{imdbRating}</div>
              </div >
              <div className='boxOffice-info' >
                <div className='BoxOffice'>BoxOffice:</div>
                <div className='BoxOffice-body'>{BoxOffice}</div>
              </div >
              <div className='plot-info' >
                <div className='Plot'>Plot:</div>
                <div className='Plot-body'>{Plot}</div>
              </div >
            </div>
          </div>
          <div className='close' onClick={() => onFilmSelected()}>&#10008;</div>
        </div >
      </> : 'Loading...'}
    </div >
  )
}


