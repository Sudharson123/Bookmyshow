import { createSlice } from "@reduxjs/toolkit";
const init={theatre:{},userSelection:[],movie:"",date:""}

const tamil={Sathyam:["10AM","2PM","6PM","10PM"],Mayajall:["3.30PM","6.30PM","10PM","1.30AM"]}
const hindi={INOX:["9AM","12PM","3PM","6PM","10PM"],PVR:["5AM","11AM","2.30PM","6PM","9.30PM"]}
const english={AMC_Grand:["10AM","2PM","6PM","10PM"],State_Theatre:["11AM","5PM","8.30PM","12PM"]}

const theatre=createSlice({
    name:"theatre",
    initialState:init,
    reducers:{
        add(state,action){
           switch (action.payload) {
            case "tamil":
                state.theatre=tamil
                break;
            case "hindi":
                state.theatre=hindi
                break;
            case "english":
                state.theatre=english
                break;
           
            default:
                break;
           }
        },
        userChoice(state,action){
            state.userSelection=action.payload
        },
        movie(state,action){
            state.movie=action.payload
   
        },setdate(state,action){
       state.date=action.payload
        }
    }
})
export const{add,userChoice,movie,setdate}=theatre.actions
export default theatre.reducer