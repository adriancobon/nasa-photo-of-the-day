import React from "react";
import Media from "./Media.js";
import { Container } from 'semantic-ui-react';


const Main = (props) => {
    return (
      <main>
        <Container>
            <Media key="1026" url={props.url} mediaType={props.mediaType}/>
            <Container text>
              <p>{props.explanation}</p>
            </Container>
        </Container>
      </main>
    );
  };
  
  export default Main;