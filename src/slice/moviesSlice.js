import { createSlice } from "@reduxjs/toolkit";

const init={title:[],movieImg:[]}

const tamilMovies={title:["Don","Vikram","Beast","RRR"],images:["https://m.media-amazon.com/images/M/MV5BMjQ3MDFhMWEtMmM2Zi00NWM4LWJmNmYtOTVjMGJkNjljYTA1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
"https://i0.wp.com/chennaivision.com/wp-content/uploads/2021/11/kamal-vikrammovie-glimpseposter.jpg?fit=799%2C1200&ssl=1",
"https://i.scdn.co/image/ab67616d0000b273013d4c16601d3664ade27872",
"https://stat1.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022.jpeg"]}
const EnglishMovies={title:["Thor","Spider Man No-Way-Home","Top Gun","Eternals"],images:[
    "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/sr/thumb/7/73/Spider-Man-_No_Way_Home_poster.jpg/1200px-Spider-Man-_No_Way_Home_poster.jpg",
    "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/p_eternals_21336_3e52af80.jpeg?region=0%2C0%2C540%2C810"
    
]}
const HindiMovies={title:["Brahmastra","Rocketry","Attack","Dhaakad"],images:[
    "https://resizing.flixster.com/Pqi5P6v8Vu_hAAh3O9edOTpM7H0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkzODFmYWI3LTA0OTAtNGZmNy05NGI5LWYzMGUxY2M0NDhkMC5qcGc=",
    "https://m.media-amazon.com/images/M/MV5BNDNlYTczNWYtZTBjNS00ODIzLWI5OGQtMWFmZGIwZWM4MGM0XkEyXkFqcGdeQXVyNzA5NjY5MzA@._V1_.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/attack--part-1-et00107994-25-03-2022-11-48-08.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjdiYzJjZDktOGVkNC00YWY2LTg3MjUtZDc3MzU4ZmU2NWM5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
]}


const movies=createSlice({
    name:"bookmyshow",
    initialState:init,
    reducers:{
        tamil(state){
          state.title=tamilMovies.title
          state.movieImg=tamilMovies.images
        },
        english(state){
            state.title=EnglishMovies.title
            state.movieImg=EnglishMovies.images
          },
          hindi(state){
            state.title=HindiMovies.title
            state.movieImg=HindiMovies.images
          }
    }
})
export const {tamil,english,hindi}=movies.actions
export default movies.reducer