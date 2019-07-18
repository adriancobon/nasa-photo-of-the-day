import React from "react";
import { Header } from 'semantic-ui-react';

const HeaderPage = (props) => {
    return (
      <header>
        <Header as='h1' id="site-title">🚀 NASA Picture of the Day 🚀</Header>
        <h3 class="date">{props.date}</h3>
        <h3 class="media-title">{props.title}</h3>
      </header>
    );
  };
  
  export default HeaderPage;