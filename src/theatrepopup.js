import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {userChoice,setdate} from './slice/theatreSlice'

function Theatrepopup() {
    const see=useSelector((state)=>state.theatreList.theatre)
    const sho=useSelector((state)=>state.theatreList.userSelection)
    const shown=useSelector((state)=>state.theatreList.movie)
    const nav=useNavigate()

    console.log(shown)
    console.log(sho)
    const dispatch=useDispatch()
    const [mall,setMall]=useState("")
    const[time,setTime]=useState("")
    const refer=useRef()
    const reff=useRef()
    const theatres=Object.keys(see)
    const [show,setShow]=useState(false)
    const [curr,setCurr]=useState("")
    const [btn,setBtn]=useState(false)
    const [pre,setPre]=useState("")
    const[tim,setTim]=useState("")
    console.log(see)
    const screen=(ref)=>{
       //setColor(!color)
       setShow(true)
       setCurr(ref.target.value)
       let value=ref.target.value
       console.log("movie",value)
      let check=ref.target.onclick
      if(check){
        
       
       ref.target.style.backgroundColor="black"
       ref.target.style.color="white"
       setMall(value)
       
       if(pre){
        pre.target.style.backgroundColor=""
        pre.target.style.color="black"
        setMall("")
    }
       setPre(ref)
   
       
     
       }
      
      
    }
    const ad=(reff)=>{
       
       
       
        setBtn(true)
        let check=reff.target.onclick
        let value=reff.target.value
        if(check){
          
         if(tim){
             tim.target.style.backgroundColor=""
             tim.target.style.color="black"
             setTime("")
         }
         
         reff.target.style.backgroundColor="black"
         reff.target.style.color="white"
         setTime(value)
         console.log(value,"time")
         setTim(reff)
    }
}
  return (
    <div className='shows' style={{display:'block'}}>
       <input onChange={(e)=>dispatch(setdate(e.target.value))} id="date"type="date" ></input>
       <br></br>
        <div className='theatre'>
        {theatres.map(item=>
            <button ref={refer}  value={item} onClick={(ref)=>screen(ref)}>{item}</button>
        )}
       </div>
       <div className='timings'>
       {
        show && see[curr].map(item=>
            <button ref={reff} value={item} onClick={(reff)=>ad(reff)}>{item}</button>
        )
        
       }
       </div>
      {btn&&<button className="continue pass" onClick={()=>{dispatch(userChoice([mall,time]));nav("/seats")}}>Continue</button>}
    </div>
  )
}

export default Theatrepopup