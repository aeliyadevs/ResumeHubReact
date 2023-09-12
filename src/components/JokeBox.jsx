import { useState } from "react";
import "../assets/scss/JokeBox.scss";
import axios from "axios";

function JokeBox() {
  const [randomJoke, setRandomJoke] = useState(null);
  const getJoke = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        setRandomJoke(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(randomJoke);
  };
  const close = () => {
    setRandomJoke(null);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="magic-btn joke-btn"
          onClick={getJoke}
          //   style={{ background: "red", color: "black" }}
        >
          Go Funny
        </button>
      </div>
      {randomJoke != null && (
        <div className="magic-wrapper joke-wrapper d-flex justify-content-center align-items-center">
          <div className="joke-content d-flex flex-column align-items-center text-white">
            <img src="/images/laughing-emoji.gif" alt="" className="mb-3" />
            <h4 className="text-center mb-4">
              {randomJoke.setup} <span>{randomJoke.punchline}</span>
            </h4>
            <button onClick={getJoke}>Get Random Joke</button>
            <i id="close" onClick={close} className="fa-solid fa-xmark"></i>
          </div>
        </div>
      )}
    </>
  );
}
export default JokeBox;
