//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let weather = 0;

setInterval(() =>{
    console.log(weather);
    ReactDOM.render(<Home seconds={weather} />, document.querySelector("#app"));
    weather++
},1000)


//render your react application



