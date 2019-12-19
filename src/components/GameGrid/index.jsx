import React, { useState, useEffect } from "react";
import "./styles.css";

import { Image } from "../../bootstrap-components";
import ScoreBar from "../ScoreBar";

import cat1 from "../../images/game-tiles/1.jpg";
import cat2 from "../../images/game-tiles/2.jpg";
import cat3 from "../../images/game-tiles/3.jpg";
import cat4 from "../../images/game-tiles/4.jpg";
import cat5 from "../../images/game-tiles/5.jpg";
import cat6 from "../../images/game-tiles/6.jpg";
import cat7 from "../../images/game-tiles/7.jpg";
import cat8 from "../../images/game-tiles/8.jpg";
import cat9 from "../../images/game-tiles/9.jpg";
import cat10 from "../../images/game-tiles/10.jpg";
import cat11 from "../../images/game-tiles/11.jpg";
import cat12 from "../../images/game-tiles/12.jpg";

const GameGrid = () => {
  const [tiles, setTiles] = useState([
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat6,
    cat7,
    cat8,
    cat9,
    cat10,
    cat11,
    cat12
  ]);
  const [clickedCats, setClickedCats] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    if (score > maxScore) {
      setMaxScore(score);
    }
    document.title = `Score: ${score} | Max: ${maxScore}`;
  }, [score, maxScore]);

  const newGame = () => {
    setScore(0);
    setClickedCats([]);
    setTiles(shuffleTiles(tiles));
  };

  const tileClick = (tile) => {
    if (clickedCats.includes(tile)) {
      alert(`You lost! Your score was: ${score}`);
      return newGame();
    }
    clickedCats.push(tile);
    setScore(score + 1);
    setTiles(shuffleTiles(tiles));
  };

  return (
    <>
      <ScoreBar score={score} maxScore={maxScore} />
      <div className="d-flex flex-wrap justify-content-around tile-container">
        {tiles.map((tile) => (
          <Image
            className="tile"
            src={tile}
            onClick={() => tileClick(tile)}
            rounded
          />
        ))}
      </div>
    </>
  );
};

function shuffleTiles(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default GameGrid;
