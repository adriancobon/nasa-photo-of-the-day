import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import HeaderPage from  "./components/HeaderPage.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


function App() {

    const [mediaURL, setMediaURL] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [explanation, setExplanation] = useState("");
    const [mediaType, setMediaType] = useState("");


    useEffect(() => {

    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=n4Gp2TX87U6izzXVXSRc6rnhznPWModSOO65aWfT`)
        .then(res => {
            setMediaURL(res.data.url);
            setDate(res.data.date);
            setTitle(res.data.title);
            setExplanation(res.data.explanation);
            setMediaType(res.data.media_type);

        })
        .catch(err => console.log(err));

    }, []);

  

  return (
    <div className="App">
      <div className="page-container">
        <HeaderPage key="1024" date={date} title={title}/>
        <Main key="1025" url={mediaURL} explanation={explanation} mediaType={mediaType} />
      </div>
        <Footer />
    </div>
  );
}

export default App;
