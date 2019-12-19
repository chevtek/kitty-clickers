import React from "react";
import "./Game.css";
import GameGrid from "./components/GameGrid";
import Footer from "./components/Footer";

function Game() {
  return (
    <div style={{ backgroundColor: "#f8d5e3" }}>
      <GameGrid />
      <Footer />
    </div>
  );
}

export default Game;
