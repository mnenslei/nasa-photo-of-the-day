import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "./App.css";




function App() {

  const [nasaImg, setNasaImg] = useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=0vdGBA2xWoIh1cmPdZIiIgkNuRodSf7tAbVDQJFF`)
    .then(res => {
      console.log(res);
      setNasaImg(res.data.hdurl);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Main nasaImg={nasaImg}/>
      <Footer />
    </div>
  );
}

export default App;
