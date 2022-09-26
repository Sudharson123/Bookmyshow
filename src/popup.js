import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {update} from "./slice/bookingSlice";



function Popup() {
    const ticketDetails=useSelector((state)=>state.ticketbook.chairno)
    const ticketNumbers=Object.keys(ticketDetails).length
    const values=Object.values(ticketDetails)
    const nav=useNavigate()
    let givetickets=""
    const dispatch=useDispatch()
    let tot=0
    for(let i=0;i<values.length;i++){
      if(i===values.length-1){
        givetickets+=values[i][0]
      }
      else{
        givetickets+=values[i][0]+","
      }
       
    }
    
    for(let i=0;i<values.length;i++){
       
        tot+=Number(values[i][1])
    }
    dispatch(update([tot,givetickets]))
  return (
    <div className='popup'>
       <h2>! Confirmation !</h2>
       <h4>You Booked {ticketNumbers} tickets</h4>
       <h4>Your Seats are {givetickets} </h4>
       <h3>Total : {tot}</h3>
       <button className='continue' onClick={()=>nav("/details")}>Continue</button>
    </div>
  )
}

export default Popup