import "./App.css";
import { useState, useEffect } from "react";
import Template from "./components/Template";
import Meme from "./components/Meme";

const App = () => {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setTemplates(data.data.memes);
        console.log(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <h1 className="title">Meme Generator</h1>
      {meme === null ?
       <Template templates={templates} setMeme={setMeme} 
      /> : 
      <Meme meme={meme} setMeme={setMeme}/>}
    </div>
  );
};

export default App;
