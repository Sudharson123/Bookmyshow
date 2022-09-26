import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Theatrepopup from './theatrepopup'
import {movie} from './slice/theatreSlice'
function Movies() {
    const movielist=useSelector((state)=>state.moviecollection.title)
    const nav=useNavigate()
    const pic=useSelector((state)=>state.moviecollection.movieImg)
    const [pop,setPop]=useState(false)
    const dispatch=useDispatch()
   
    
  return (
    <>
    <h1>Movie List</h1>
    <hr></hr>
    <div className='movieContainer'>
       
        {movielist.map((item,ind)=>{
            return(
        <div className="card">
            
            <img src={pic[ind]} alt={item}/>
            <button value={item} onClick={(e)=>{dispatch(movie(e.target.value));setPop(true)}}>Book Now</button>
        </div>
            )
        })}
       
    </div>
    {pop && <Theatrepopup/>}
    </>
    
  )
}

export default Movies