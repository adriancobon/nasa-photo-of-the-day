import React from "react";

const Header = (props) => {
    return (
      <header>
        <h1>🚀 NASA Picture of the Day 🚀</h1>
        <p>{props.date}</p>
        <p>{props.title}</p>
      </header>
    );
  };
  
  export default Header;