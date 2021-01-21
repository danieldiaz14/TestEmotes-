import React, { useState } from "react";

import ImageUploader from "./Imageuploader";
import JumboTron from "./Jumbotron";
import Nav from "./Navigation";

const App = () => {
  return (
    <div className="container-md">
      <Nav />
      <JumboTron
        header="Content Creator Emote Tester!"
        lead="Upload an image to see what it would look like on popular content creator websites like Twitch, Discord, Youtube."
      >
        <ImageUploader />
      </JumboTron>
    </div>
  );
};

export default App;
