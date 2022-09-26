import React, { useState } from 'react'
import {signInWithPopup } from "firebase/auth";

import {auth,Gprovider,Fbprovider} from './firebase';
import {adduser} from './slice/bookingSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user,setUser]=useState("")
    const dispatch =useDispatch()
    const nav=useNavigate()
    const googlelogin=async()=>{
        try{
          const res=await  signInWithPopup(auth,Gprovider);
        //   setUser(res.displayName)
          setUser(res.user.displayName)
          dispatch(adduser(res.user.displayName))
        }
        catch(err){
            console.log(err.message)
        }
       };
    const fblogin=async()=>{
        try{
          const res=await  signInWithPopup(auth,Fbprovider);
        //   setUser(res.displayName)
          setUser(res.user.displayName)
          dispatch(adduser(res.user.displayName))
        }
        catch(err){
            console.log(err.message)
        }
       };
  return (
    <>
    <h1>BOOK MY SHOW</h1>
        <hr></hr>
    <div className='first'>
        
        <div className='buttoncontainer'>
            <button onClick={()=>googlelogin()}>
            <img  className='logo' src='https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png' alt='google'></img>

                Google Login
                </button>
        </div>
        
        <div className='buttoncontainer'>
            <button onClick={()=>fblogin()}>
            <img className='logo' src='https://museumandgallery.org/wp-content/uploads/2020/03/Facebook-Icon-Facebook-Logo-Social-Media-Fb-Logo-Facebook-Logo-PNG-and-Vector-with-Transparent-Background-for-Free-Download.png'  alt='fb'></img>

                Facebook Login
                </button>
        </div>
        
    </div>
    {user&&nav("/home")}
    </>
    
  )
}

export default Login