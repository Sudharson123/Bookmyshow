import React from 'react'
import {tamil,english,hindi} from './slice/moviesSlice'
import{add} from './slice/theatreSlice'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faUser } from '@fortawesome/free-solid-svg-icons'

function Home() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=useSelector((state)=>state.booked.username)
  return (
    <div>
            <div className='header'>
            <h1>BOOK MY SHOW</h1>
            <div className='fa'>
            <h3><FontAwesomeIcon icon={ faUser } />{user}</h3>

            </div>
            </div>
            
        <hr></hr>
        <h2>Choose Your Language</h2>
        <div>
            <button className='home' onClick={()=>{dispatch(tamil());dispatch(add("tamil"));navigate("/movies")}}>Tamil</button>
            <button className='home' onClick={()=>{dispatch(hindi());dispatch(add("hindi"));navigate("/movies")}}>Hindi</button>
            <button className='home' onClick={()=>{dispatch(english());dispatch(add("english"));navigate("/movies")}}>English</button>
           
        </div>
    </div>
    

  )
}

export default Home