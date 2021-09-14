import React, { useState } from 'react';
const api = {
  key: '027e92fe049fd64f53c6fe1ed72487c8',
  baseURL: 'https://api.openweathermap.org/data/2.5/',
}

export const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.baseURL}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }


  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }


  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{Math.round(weather.main.temp)}&#730;c</div>
              <div className='feels'>Feels like: {Math.round(weather.main.feels_like)}&#730;c</div>
              <div className='weather'>{weather.weather[0].main}</div>
              <div className='other-params'>
                <div className='humidity'>Humidity: {Math.round(weather.main.humidity)}%</div>
                <div className='min-max'>
                  <div className='min'>Temp-min: {Math.round(weather.main.temp_min)}&#730;c</div>
                  <div className='max'>Temp-max: {Math.round(weather.main.temp_max)}&#730;c</div>
                </div>
              </div>
            </div>
          </>
        ) : ('')}
      </main>
    </div>
  );
}


