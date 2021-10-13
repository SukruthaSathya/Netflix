import React,{ useEffect, useState } from 'react'
import {API_KEY_HERE,imageUrl} from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        axios.get(`/trending/all/week?api_key=${API_KEY_HERE}&language=en-US`).then((response)=>{
            console.log(response.data.results[2]);
            setMovie(response.data.results[2])
        })
    },[])
   /* {const showType=()=>{
        if (movie && movie.media_type==='tv'){
            console.log(movie.name);
            return movie.name
        }
        else if (movie && movie.media_type==='movie'){
            console.log(movie.title);
            return movie.title
        }
    }} */
    return (
        <div 
        style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className="banner">
            <div className="content">
                <h1 className="title">{movie.title}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie.overview}</h1>
            </div>
            <div className="fade_bottom"></div>
            
        </div>
    )
}

export default Banner
