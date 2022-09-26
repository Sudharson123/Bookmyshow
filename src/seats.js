import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "./popup";
import { add, remove} from "./slice/checkoutSlice";

function Seats() {
  const seat = useSelector((state) => state.seats);
  const[setter,setSett]=useState(false)
  const obj = {
    0: "A",
    24: "B",
    30: "C",
    54: "D",
    78: "E",
    102: "F",
    126: "G",
    150: "H",
    174: "I",
    180: "K",
    204: "L",
    228: "M",
    252: "N",
    276: "O",
  };
  const dispatch = useDispatch();
  let inref = useRef();
  const hoi = useSelector((state) => state.ticketbook);
  console.log(hoi);
  const sett = (inn) => {
    const currseat = inn.target.value;

    const checkcolor = inn.target.style.backgroundColor;
    if (!checkcolor) {
      inn.target.style.backgroundColor = "black";
      //console.log(inn.target.value,typeof(inn.target.value))
      dispatch(add(Number(currseat)));
    } else {
      inn.target.style.backgroundColor = "";
      dispatch(remove(Number(currseat)));
    }
    //  inref.current.id.style.backgroundColor="green"
  };
  const confirm = () => {
    // dispatch(trig());
    setSett(true)
  };
  return (
    <div className="container">
      <div className="confirmseats">
        <button onClick={() => confirm()}>Confirm Seats</button>
      </div>

      <div>
        {seat.upper.map((item, ind) => {
          if (obj[ind]) {
            return (
              <button
                style={{
                  backgroundColor: "rgb(255, 42, 0)",
                  border: "none",
                  marginRight: "17px",
                  marginTop: "-20px",
                  fontWeight: "bolder",
                }}
              >
                {obj[ind]}
              </button>
            );
          } else {
            return (
              <button
                ref={inref}
                value={ind}
                id={`${ind}`}
                onClick={(ref) => {
                  sett(ref);
                }}
                className="seat"
              ></button>
            );
          }
        })}
        <hr></hr>
      </div>

      <div>
        {seat.middle.map((item, ind) => {
          let index = 30 + ind;
          if (obj[index]) {
            return (
              <button
                style={{
                  backgroundColor: "rgb(255, 42, 0)",
                  border: "none",
                  marginRight: "18px",
                  fontWeight: "bolder",
                }}
              >
                {obj[index]}
              </button>
            );
          } else {
            return (
              <button
                ref={inref}
                value={index}
                id={`${ind}`}
                onClick={(ref) => {
                  sett(ref);
                }}
                className="seat"
              ></button>
            );
          }
        })}
        <hr></hr>
      </div>

      <div>
        {seat.lower.map((item, ind) => {
          let index = 180 + ind;
          if (obj[index]) {
            return (
              <button
                style={{
                  backgroundColor: "rgb(255, 42, 0)",
                  border: "none",
                  marginRight: "18px",
                  fontWeight: "bolder",
                }}
              >
                {obj[index]}
              </button>
            );
          } else {
            return (
              <button
                ref={inref}
                value={index}
                id={`${ind}`}
                onClick={(ref) => {
                  sett(ref);
                }}
                className="seat"
              ></button>
            );
          }
        })}
      </div>
      {setter && <Popup/>
        }
    </div>
  );
}

export default Seats;
