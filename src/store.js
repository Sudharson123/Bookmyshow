import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./slice/bookingSlice";
import checkoutSlice from "./slice/checkoutSlice";
import moviesSlice from "./slice/moviesSlice";
import seatsSlice from "./slice/seatsSlice";
import theatreSlice from "./slice/theatreSlice";

export const store=configureStore({
    reducer:{
        moviecollection:moviesSlice,
        seats:seatsSlice,
        ticketbook:checkoutSlice,
        booked:bookingSlice,
        theatreList:theatreSlice
    }
})