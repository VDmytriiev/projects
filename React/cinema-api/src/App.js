import React, { useState } from "react"
import { MovieInfo } from "./MovieInfo"
import logo from './image/movies.png'
import { MovieDesc } from "./MovieDesc"

export const API_KEY = '685ae05e'
export const URL = 'http://www.omdbapi.com/'


export const App = () => {
  const [query, setQuery] = useState('')
  const [films, setFilms] = useState([])
  const [selectedFilm, setSelectedFilm] = useState('')

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${URL}?s=${query}&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setFilms(result.Search)
          setQuery('')
        })
    }
  }


  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <div className='dva' >
            <img className='logo' src={logo} alt='logo'></img>
            <div className='title-app'>DVA movies app</div>
          </div>
          <input
            className='search-bar'
            type='text'
            placeholder='🔍 Search...'
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
            value={query}
          />
        </div>
        {selectedFilm && <MovieDesc selectedFilm={selectedFilm} onFilmSelected={setSelectedFilm} />}
        <div className='about-film'>
          {films?.length ? films.map((film) => (<MovieInfo key={film.imdbID} film={film} onFilmSelected={setSelectedFilm} />)) : <div className='NoMovie'>No Movie Search</div>}
        </div>
      </main>
    </div>
  )
}

