import React, { useState } from "react";
// import video from "../img/github-hero.mp4";
import Form from "./components/Form";
import Output from "./components/Output";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <h2>Welcome to Shortie</h2>
      <Form isSubmit={setIsSubmitted} />
      <div>{isSubmitted ? <Output /> : <></>}</div>
      {
        // eslint-disable-next-line jsx-a11y/media-has-caption
        // <video width="1920" height="1080" controls autoPlay="true">
        //   <source src={video} type="video/mp4" />
        // </video>
      }
    </div>
  );
};

export default App;
