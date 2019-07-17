import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from  "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


function App() {

    const [mediaURL, setMediaURL] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [explanation, setExplanation] = useState("");


    useEffect(() => {

    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
            setMediaURL(res.data.url);
            setDate(res.data.date);
            setTitle(res.data.title);
            setExplanation(res.data.explanation);

        })
        .catch(err => console.log(err));

    }, []);

  

  return (
    <div className="App">
      <Header key="1024" date={date} title={title}/>
      <Main key="1025" url={mediaURL} explanation={explanation} />
      <Footer />
    </div>
  );
}

export default App;
