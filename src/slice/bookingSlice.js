import { createSlice } from "@reduxjs/toolkit";
import { getAdditionalUserInfo } from "firebase/auth";

const init={BookingDetails:{amount:"",seat:""},username:""}

const booking=createSlice({
    name:"Booked",
    initialState:init,
    reducers:{
      update(state,action){
        state.BookingDetails.seat=action.payload[1]
        state.BookingDetails.amount=action.payload[0]
      },
      adduser(state,action){
        state.username=action.payload
      }
    }
})
export const {update,adduser}=booking.actions
export default booking.reducer