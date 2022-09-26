import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import Booked from './booked'

function Details() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [name,setName]=useState("")
    const[msg,setMsg]=useState(false)
    const getdetails=(data)=>{
      setName(data.fname)
      setMsg(true)
    
    }
    const close=()=>{
           setMsg(false)
    }
  return (
    <div className='details'>
        <div className='formcontainer'>
        <form onSubmit={handleSubmit(getdetails)}>
      <label>First Name</label>
      <input type="text" {...register("fname",{required:true})}></input>
      {errors.fname && <p>First name is required</p>}
      <label>Last Name</label>
      <input type="text" {...register("lname",{required:true})}></input>
      {errors.lname && <p>Last name is required</p>}
      <label>Mobile No</label>
      <input type="number" {...register("phno",{required:true,maxLength:10,minLength:10})}></input>
      {errors?.phno?.type === "required" && (
            <p className="error">Mobile number required</p>
          )}
      {errors?.phno?.type === "maxLength" && (
            <p className="error">10 Numbers only allowed</p>
          )}
     {errors?.phno?.type === "minLength" && (
            <p className="error">Minimum 10 Numbers Required</p>
          )}
      <label>Email</label>
      <input type="text" {...register("email",{required:true})} ></input>
      {errors?.email?.type === "required" && (
            <p className="error">Email Required</p>
          )}

          <br></br>
      <input className='submit' type="submit"></input>
    </form>

        </div>
        {msg&& <Booked Name={name} close={close}/>}
        
    </div>
    
  )
}

export default Details