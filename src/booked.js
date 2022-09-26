import React from 'react'
import { useSelector } from 'react-redux'

function Booked(props) {
    const see=useSelector((state)=>state.booked.BookingDetails)
    const theatreName=useSelector((state)=>state.theatreList.userSelection)
    const movieName=useSelector((state)=>state.theatreList.movie)
    let date=useSelector((state)=>state.theatreList.date)

    const formatdate=date.split("-")
    const arr=[]
   for(let i=formatdate.length-1;i>=0;i--){
    arr.push(formatdate[i])
   }
   console.log(arr)
   date=arr.join("-")
  return (
    <div className='book'>

        <div className='inner'>
         
          <div className='title'>
          <span >{theatreName[0]} Cinemas</span>
          <button className='close' onClick={()=>props.close(false)} >&times;</button><br></br>

          </div>
          
        {/* <span>{theatreName[0]}</span><br></br> */}
        <span>Name : </span>
           <span>{props.Name}</span><br></br>
           <span>Seats : </span>
           <span>{see.seat}</span><br></br>
           <span>Movie :</span>
           <span>{movieName}</span><br></br>
           <span>Date :</span>
           <span>{date}</span><br></br>
           <span>Show Time :</span>
           <span>{theatreName[1]}</span><br></br>
          <span>Amount Paid : </span>
          <span>{see.amount}</span>
          <img src="https://www.creativefabrica.com/wp-content/uploads/2021/04/17/Booked-Stamp-Vector-Illustration-Graphics-10962864-1.jpg" alt="booked"/>
        </div>
           
           

       
        
        </div>
  )
}

export default Booked