import React from 'react'
import './index.css'

export const MovieInfo = (props) => {
  const { Poster, Title, Year, Type, imdbID } = props.film
  return (
    <div className='film-info' onClick={() => props.onFilmSelected(imdbID)}>
      <img src={Poster} alt={Title} className='poster'></img>
      <span className='title-film'>{Title}</span>
      <div className='year_type'>
        <span>Year: {Year}</span>
        <span>Type: {Type}</span>
      </div>
    </div>
  )
}


