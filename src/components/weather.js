
import React, { useEffect, useState } from 'react';

import { BiSearchAlt } from "react-icons/bi";

import './weather.css'



const key = ['9387e220881225dc03d1e934072f46d3']



function Weather() {

    const [city, setCity] = useState('')
    const [weatherForecast, setWeatherForecast] = useState(null)

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const url = [`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`]




    const handleSearch = () => {

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()


                }
            })
            .then((data) => {
                setWeatherForecast(data)
                console.log(data)
            })

    };






    return (
        <div className='weather-app'>
            <div className='weather-title'>
                <h1>Weather App  </h1>

            </div>

            <input
                className='input'
                placeholder="Cidade..."
                value={city}
                onChange={handleChange}
                type="text"

            ></input>



            <div className='search-button' >
                <button onClick={handleSearch} ><p>Pesquisar</p> <BiSearchAlt /></button>

            </div>




            {
                weatherForecast ? (


                    <div className='card-weather'>
                        <div className='city-name'><h1>{weatherForecast.name}       -        {weatherForecast.sys.country}</h1></div>


                        <div className='temp-weather'>
                            <div className='main-temp'>
                                <h1>{Math.round(weatherForecast.main.temp)}°</h1>
                                <p>{weatherForecast.weather[0].description}</p>

                            </div>
                            <div className='max-min-weather'>
                                <div className='max'>
                                    <p className='high'>High:</p>
                                    <p> {Math.round(weatherForecast.main.temp_max)}°C </p>

                                </div>

                                <div className='min'>


                                    <p className='low'>Low:</p>
                                    <p> {Math.round(weatherForecast.main.temp_min)}°C </p>
                                </div>
                            </div>


                            <div className='icon'><img src={`http://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}@2x.png`}></img></div>
                        </div>
                    </div>
                ) : null
            }


        </div>

    )

}

export default Weather;