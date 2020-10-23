import React from 'react';
import './Banner.style.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './Banner.style.css';
import axios from '../axios';
import requests from '../request';
//import {base_url} from '../Componets/Rows.Componet';


function Banner ()  {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);

            return request;


        }
        fetchData();

    }, []);

    //console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return(
    <header className='banner'
    style = {{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        //backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
        
    }}
        
    >
        <div className='banner__content'>
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner__btns'>
                <button className="banner__btn">Play</button>
                <button className="banner__btn">My List</button>
            </div>
            <h1 className='banner_desr'>{truncate(movie?.overview,150)}</h1>

        </div>

        <div className='banner--fadeBottom' />

    </header>
    )
};



export default Banner;