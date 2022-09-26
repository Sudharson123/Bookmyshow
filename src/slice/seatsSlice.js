import { createSlice } from "@reduxjs/toolkit";
const start={lower:[],middle:[],upper:[]}
function createseats(deck,seats){
    if(deck==="lower"){
    for(let i=0;i<seats;i++){
        start[deck].push(i) 
    }
    }
    else if(deck==="middle"){
        let mid=100+seats
        for(let i=101;i<mid;i++){
            start[deck].push(i) 
        }   
    }
    else{
        let up=130+seats
        for(let i=130;i<up;i++){
            start[deck].push(i) 
        }  
    }

}
createseats("lower",100)
createseats("upper",30)
createseats("middle",150)



const chairs=createSlice({
    name:"seats",
    initialState:start,
    reducer:{
           }
})
export default chairs.reducer